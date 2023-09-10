import React, { useState } from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import profilePic from "../../public/images/profile/amit-logo-removebg-preview.png";
import Image from "next/image";
import { sendContactForm } from "../lib/api";

import {
    Button,
    Container,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";

const initValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
}

const initState = {
    isLoading: false,
    error: "",
    values: initValues
}

const contact = () => {
    const toast = useToast();
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});

    const { values, isLoading, error } = state;

    const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

    const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

    return (
        <>
            <Head>
                <title>Amit Gupta | Contact Page</title>
                <meta name="description" content="description"></meta>
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text={"Say Hello To Me"} className={"mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "}></AnimatedText>
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-5 flex flex-col items-center justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                                Let's <span className="text-primary">Connect</span>
                            </h2>
                            {/* form */}
                            <FormControl isRequired isInvalid={touched.name && !values.name}>
                                <FormLabel>Name</FormLabel>
                                <Input type={"text"} name="name" errorBorderColor="red.300" value={values.name} onChange={handleChange} onBlur={onBlur} className="input" />
                                <FormErrorMessage >Required</FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired mt={20} isInvalid={touched.email && !values.email}>
                                <FormLabel>Email</FormLabel>
                                <Input type={"text"} name="email" errorBorderColor="red.300" value={values.email} onBlur={onBlur} onChange={handleChange} />
                                <FormErrorMessage >Required</FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired mt={20} isInvalid={touched.subject && !values.subject}>
                                <FormLabel>Subject</FormLabel>
                                <Input type={"text"} name="subject" errorBorderColor="red.300" value={values.subject} onBlur={onBlur} onChange={handleChange} />
                                <FormErrorMessage >Required</FormErrorMessage>
                            </FormControl>
                            <FormControl isRequired mt={20} ml={10} isInvalid={touched.message && !values.message}>
                                <FormLabel>Message</FormLabel>
                                <Textarea type={"text"} rows={4} errorBorderColor="red.300" name="message" value={values.message} onBlur={onBlur} onChange={handleChange} />
                                <FormErrorMessage >Required</FormErrorMessage>
                            </FormControl>
                            <Button variant="outline" colorScheme={"blue"} disabled={!values.name || !values.email || !values.subject || !values.message} onClick={onSubmit} isLoading={isLoading}>Submit</Button>
                        </div>
                        <div className="col-span-3 mt-[-100px] flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <Image
                                src={profilePic}
                                alt="amitgupta"
                                className="w-full h-auto rounded-2xl"
                                priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default contact