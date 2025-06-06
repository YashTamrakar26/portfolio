"use client"
import Image from "next/image";
import { useState } from "react";
import { motion } from 'framer-motion';
export default function AboutUs() {

    let [index, setIndex] = useState(0);

    return (<div className=" flex flex-col mb-[15%] sm:mb-[10%]">

        <motion.div
            animate={{ y: [-10, 10, -10], }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
            <div className="text-center text-2xl w-[100%] mb-[5%]">
                <Image src="/Icon/arrow.png" width={24} height={24} alt="pp" className="mx-auto" />
            </div>
        </motion.div>
        <div className="text-center text-3xl font-semibold">About Me</div>
        <div className="flex justify-center items-center lg:px-[10%]">
            <div className="w-[50%] hidden md:block"><Image src="/Home/Profile2.gif" width={600} height={600} alt="pp" className="mt-[5%]" unoptimized priority/>
            </div>

            <div className="flex flex-col justify-evenly w-[100%] sm:w-[80%] md:w-[50%] md:ml-[2%]">
                <div className="flex text-xs mx-auto border border-slate-300 w-fit rounded-full my-[3%] p-[1%] md:mx-0 sm:text-base">
                    <div className={`${index === 0 ? 'bg-black text-white' : ''} px-6 py-3 rounded-full transition duration-300 cursor cursor-pointer`} onClick={() => { setIndex(0) }}>Personal Info</div>
                    <div className={`${index === 1 ? 'bg-black text-white' : ''} px-6 py-3 rounded-full transition duration-300 cursor cursor-pointer`} onClick={() => { setIndex(1) }}>Qualifications</div>
                    <div className={`${index === 2 ? 'bg-black text-white' : ''} px-6 py-3 rounded-full transition duration-300 cursor cursor-pointer`} onClick={() => { setIndex(2) }}>Skills</div>
                </div>
                <div>
                    <div className="flex px-[5%]">

                        <div className={`${index === 0 ? 'relative opacity-100' : 'absolute opacity-0'} transition duration-700 mx-[2%]`}>
                            <div className="text-2xl my-[2%] font-semibold">Passionate Coder</div>
                            <div className="text-sm my-[1%] text-slate-500">Creative and dependable MERN Stack Developer experienced in building responsive user interfaces and web applications. Proficient in
                                programming languages including JavaScript and React, with expertise in MongoDB for database management..</div>
                            <div className="flex justify-center flex-col my-6">
                                <div className="flex my-2 w-[50%] text-sm"><Image src="/Icon/user.png" height={20} width={20} alt="icon" /><div className="mx-1">Yash Tamrakar</div></div>
                                <div className="flex my-2 w-[50%] text-sm"><Image src="/Icon/email.png" height={20} width={20} alt="icon" /><div className="mx-1"></div>yashtamrakar109@gmail.com</div>
                                <div className="flex my-2 w-[50%] text-sm"><Image src="/Icon/education.png" height={20} width={20} alt="icon" /><div className="mx-1">Btech in CSE</div></div>
                                <div className="flex my-2 w-[50%] text-sm"><Image src="/Icon/calendar.png" height={20} width={20} alt="icon" /><div className="mx-1">Born on 26/05/23</div></div>
                            </div>

                        </div>

                        <div className={`${index === 1 ? 'relative opacity-100' : 'absolute opacity-0'} transition duration-700 mx-[2%] w-[100%]`}>
                            <div className="text-2xl font-semibold my-[3%]">My Journey</div>
                            <div className="flex flex-col md:flex-row">
                                <div className="mx-[5%]">
                                    <div className="text-lg font-medium my-1 flex items-center"><Image src="/Icon/suitcase.png" height={20} width={20} alt="icon" /><div className="mx-2">Expirence</div></div>
                                    <div className="my-3 border-l pl-4">
                                        <div>Mechbuddy</div>
                                        <div className=" text-slate-600 text-sm">Full Stack Developer</div>
                                        <div className="mt-3 text-sm">2024-2024</div>
                                    </div>
                                </div>
                                <div className="mx-[5%]">
                                    <div className="text-lg font-medium my-1 flex items-center"><Image src="/Icon/educationBlock.png" height={20} width={20} alt="icon" /><div className="mx-2">Education</div></div>
                                    <div className="my-3 border-l pl-4">
                                        <div>GGITS</div>
                                        <div className=" text-slate-600 text-sm">Btech Cse</div>
                                        <div className="mt-3 text-sm">2021-2025</div>
                                    </div>
                                    <div className="my-3 border-l pl-4">
                                        <div>Small Wonders Sr Sec School</div>
                                        <div className=" text-slate-600 text-sm">High School</div>
                                        <div className="mt-3 text-sm">2013-2021</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${index === 2 ? 'relative opacity-100' : 'absolute opacity-0'} transition duration-700 mx-[2%]`}>
                            <div className="text-2xl font-semibold my-[3%]">Tools I Use</div>
                            <div className="flex flex-col">
                                <div className=" font-semibold border-b my-2 text-lg">Skills</div>
                                <div className="my-1"><span className="font-semibold mx-1">Languages :</span> JavaScript, HTML5, CSS, C, C++</div>
                                <div className="my-1"><span className="font-semibold mx-1">Frameworks :</span> React, Redux, Node.js, Express, Tailwind , NextJs</div>
                                <div className="my-1 mb-5"><span className="font-semibold mx-1">Databases :</span> MongoDB</div>
                                <div className="my-1 font-semibold text-lg border-b mb-4">Tools</div>
                                <div className="flex">
                                    <Image src="/Icon/vsCode.png" height={35} width={35} alt="icon" className="mx-2" />
                                    <Image src="/github.png" height={35} width={35} alt="icon" className="mx-2" />
                                    <Image src="/Icon/postMan.png" height={35} width={35} alt="icon" className="mx-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>)
}