import React, {useRef} from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "@/components/LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref} />
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration: 0.5, type: "spring"}}>
            <h3 className="capitalize font-bold text-2xl">{position}&nbsp; <a target={"_blank"} className={"text-primary dark:text-primaryDark capitalize"} href={companyLink}>{`@ ${company}`}</a> </h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75">
                {time} | {address}
            </span>
            <p className="font-medium w-full ">
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">Experience</h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light" />
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details position={"Software Development Engineer"} company={"VALUEFY TECHNOLOGIES PVT. LTD"} companyLink={"https://valuefy.com/"} time={"March - 2022 to Present"} address={"22ND FLOOR, OFF WESTERN EXPRESS HIGHWAY, HD-014, WEWORK OBEROI, COMMERZ II, OBEROI GARDEN CITY, GOREGAON EAST, MUMBAI – 400 063 MUMBAI MAHARASHTRA 400063"} work={"Worked as Full stack Developer where I have worked on backend and frontend code to print the barcode tag printing projects."} />
                    <Details position={"Full Stack Developer"} company={"Invizio Solutions LLP"} companyLink={"https://inviziosolutions.com/"} time={"June - 2021 to March - 2022"} address={"Parekh Market Building, 908, Opera House, Mumbai, Maharashtra 400004"} work={"Worked as Full stack Developer where I have worked on backend and frontend code to print the barcode tag printing projects."} />
                    <Details position={"Web Developer"} company={"Runtime Solutions Pvt Ltd"} companyLink={"https://www.runtime-solutions.com/"} time={"Feb - 2020 to May - 2021"} address={"Ganga Jamuna, Shop no 9, Yari Rd, next to Air Indian colony, Versova, Mumbai, Maharashtra 400061"} work={"Worked as a Web developer where I have worked on India Fact Quiz Web App for both UI and backend code."} />
                </ul>
            </div>
        </div>
    )
}

export default Experience