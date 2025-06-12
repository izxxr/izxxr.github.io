import { Image } from "@heroui/react"
import logo from "../assets/logo.png"
import logo_dark from "../assets/logo_dark.png"
import type { ComponentCommonProps } from "../types"

export default function About(props: ComponentCommonProps) {
    return (
        <div id="about" className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-12 gap-12">
            <div className="flex flex-col gap-10 max-w-xl">
                <h1 className="underline underline-offset-8 decoration-solid font-black text-default-900 text-4xl text-center lg:text-left">
                    About Me
                </h1>
                <h2 className="font-medium text-default-500 text-lg text-justify">
                    Hello, I'm Izhar. I'm currently a computer science student at LUMS and a passionate
                    programmer with over 6 years of experience. I'm primarily interested in networking,
                    backend web development, and automation. However, I don't confine myself to specific
                    areas and always like to try my hand on new things. I'm proficient in Python with
                    extensive experience in C, C++, and JavaScript and few other programming languages.
                    <br /><br />
                    Other than programming, I write blog and other form of online articles and resources
                    primarily focused around programming and technology. In my free time, you will probably
                    find me watching cricket, gaming, or — more often than not — deep in code, working on
                    something new. 
                </h2>
            </div>
            <Image
                className="invisible lg:visible"
                src={props.theme === 'light' ? logo : logo_dark}
                width={400}
                height={400}
                alt="Izhar's Logo"
            />
        </div>
    )
}