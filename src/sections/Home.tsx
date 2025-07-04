import { useState } from "react";
import { Link } from "@heroui/react"
import { AnimatePresence, motion } from "framer-motion";
import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
    BookOutlined,
} from "@ant-design/icons";
import { DownIcon } from "../icons"
import type { ComponentCommonProps } from "../types";

const TITLES = [
    "Software Developer",
    "Student",
    "Avid Programmer",
    "Tech Enthusiast",
]

export default function Home(_: ComponentCommonProps) {
    const [title, setTitle] = useState(0);

    return (
        <div className="sm:flex flex-col gap-12 sm:gap-5 justify-center content-center items-center px-4 py-10">
            <div className="mt-12 sm:mt-20 flex flex-col gap-4 sm:gap-8 justify-center content-center items-center text-center">
                <h1 className="font-black text-default-900 text-4xl sm:text-6xl">Izhar Ahmad</h1>
                <h2 className="font-bold text-default-700 text-xl sm:text-3xl font-mono">
                    <span
                        className="relative inline-block cursor-pointer overflow-hidden h-[1.5em]"
                        onClick={() => {
                            setTitle((prev) => (prev === TITLES.length - 1 ? 0 : prev + 1));
                        }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="block line-through decoration-yellow-200/30 decoration-20 hover:decoration-yellow-200/20 select-none"
                            >
                                &nbsp;{TITLES[title]}&nbsp;
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </h2>
            </div>
            <br />
            <div className="flex flex-wrap justify-center gap-6 sm:flex-nowrap sm:gap-12">
                <Link color={"foreground"} href="https://github.com/izxxr" target="_blank">
                    <GithubOutlined className="text-3xl transition-transform duration-300 ease-in-out hover:-translate-y-1" />
                </Link>
                <Link color={"foreground"} href="https://linkedin.com/in/thisizahmad" target="_blank">
                    <LinkedinOutlined className="text-3xl transition-transform duration-300 ease-in-out hover:-translate-y-1" />
                </Link>
                <Link color={"foreground"} href="https://izxxr.github.io/blog" target="_blank">
                    <BookOutlined className="text-3xl transition-transform duration-300 ease-in-out hover:-translate-y-1" />
                </Link>
                <Link color={"foreground"} href="mailto:thatizharahmad@gmail.com" target="_blank">
                    <MailOutlined className="text-3xl transition-transform duration-300 ease-in-out hover:-translate-y-1" />
                </Link>
            </div>
            <div className="w-full flex justify-center mt-20 sm:mt-30">
                <Link href="#about">
                    <DownIcon className="fill-default-900 size-8 sm:size-10 animate-bounce" />
                </Link>
            </div>
        </div>
    )
}