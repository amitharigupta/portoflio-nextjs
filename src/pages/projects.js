import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
            <Link href={link} target={"_blank"} className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} alt={title} className={"w-full h-auto"} />
            </Link>
            <div className="w-1/2 flex flex-col items-start justify-between pl-6 ">
                <span className="text-primary font-medium text-xl ">{type}</span>
                <Link href={link} target={"_blank"} className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark ">{summary}</p>
                <div className="mt-2 flex items-center ">
                    <Link href={github} className={"w-10 "} target={"_blank"} >
                        <GithubIcon />
                    </Link>
                    <Link href={link} className={"ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"} target={"_blank"} >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, img, link, github }) => {
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
            <Link href={link} target={"_blank"} className="w-full cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} alt={title} className={"w-full h-auto"} />
            </Link>
            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl ">{type}</span>
                <Link href={link} target={"_blank"} className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} className={"text-lg font-semibold underline"} target={"_blank"} >
                        Visit
                    </Link>
                    <Link href={github} className={"w-8"} target={"_blank"} >
                        <GithubIcon />
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Amit Gupta | About Page</title>
                <meta name="description" content="description"></meta>
            </Head>
            <main className="">
                <Layout className="pt-16">
                    <AnimatedText text={"Imagination Trumps Knowledge!"} className={"mb-16"} />
                    <div className="grid grid-cols-12 gap-24 gap-y-32">
                        <div className="col-span-12">
                            <FeaturedProject img={project1} title={"URL Shortner"} summary={"This project is used to make the long URL into Short URL"} link={"https://google.com"} github={"/"} type={"Featured Project"} />
                        </div>
                        <div className="col-span-6">
                            <Project img={project1} title={"URL Shortner"} link={"https://google.com"} github={"/"} type={"Featured Project"} />
                        </div>
                        <div className="col-span-6">
                            <Project img={project1} title={"URL Shortner"} link={"https://google.com"} github={"/"} type={"Featured Project"} />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject img={project1} title={"URL Shortner"} summary={"This project is used to make the long URL into Short URL"} link={"https://google.com"} github={"/"} type={"Featured Project"} />
                        </div>
                        <div className="col-span-6">
                            <Project img={project1} title={"URL Shortner"} link={"https://google.com"} github={"/"} type={"Featured Project"} />
                        </div>
                        <div className="col-span-6">
                            <Project img={project1} title={"URL Shortner"} link={"https://google.com"} github={"/"} type={"Featured Project"} />
                        </div>
                    </div>

                </Layout>
            </main>
        </>
    )
}

export default projects