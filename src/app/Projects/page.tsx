"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type Item = {
    id: number;
    title: string;
    img: string;
    desc: string;
    link: string;
    color: string;
};

const items: Item[] = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "MaargDarshan",
        desc: "There is a lack of awareness and information about the various career options available for students after passing out of school in India .Our AI-powered platform offers personalized career guidance, helping you discover your ideal path",
        img: "/Project/marg.png",
        link: "/",
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "Laundry Site",
        desc: "A simple frontend site where you can explore my user-friendly laundry service website. Easily schedule pickups and deliveries with my clean and intuitive design..",
        img: "/Project/laund.png",
        link: "/",
    },
    {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "Blog Site",
        desc: "Explore the insights, experiences, and perspectives of students on our blog. Dive into a diverse range of topics, from academics to student life, and join the conversation with fellow learners. Welcome to a space where students share their stories and inspire one another.",
        img: "/Project/blog.png",
        link: "/",
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "Recipe Web App",
        desc: "Recipe Web App is a user-friendly web app for discovering, saving, and sharing recipes. It uses a powerful API to provide a vast database of recipes from various cuisines and dietary preferences..",
        img: "/Project/recipe.png",
        link: "/",
    },
];

export default function Projects() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="realtive text-6xl w-screen h-[calc(100vh-5rem)] flex flex-col items-center justify-end sm:text-8xl text-center">
                    <div>
                        My Works
                    </div>
                    <motion.div
                        animate={{ y: [-10, 10, -10], }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
                        <div className="text-center text-2xl mt-[30vh] mb-[5vh]">
                            <Image src="/Icon/mouse.png" width={50} height={50} alt="pp" className="mx-auto" />
                        </div>
                    </motion.div>
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-8 text-white px-[20%]">
                                    <h1 className="text-4xl">
                                        {item.title}
                                    </h1>
                                    <div>
                                        <Image src={item.img} height={800} width={700} alt="demopic" />
                                    </div>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <Link href={item.link} className="flex justify-end">
                                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-300 to-purple-300" />
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col  items-center justify-center  text-center">
                <h1 className="text-6xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-[400px] h-[400px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Front-end Developer and UI Designer
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/Contact"
                        className="w-28 h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center z-10"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

