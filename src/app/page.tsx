'use client'
import Header from "@/components/Home/Header/Header";
import AboutUs from "@/components/Home/AboutUs/AboutUs";
import { motion } from 'framer-motion';
import { useRouter } from "next/navigation";

export default function Home() {


  let router = useRouter();
  function handleClick() {
    router.push("/Contact");
  }

  return (<motion.div initial={{ y: "-100vh" }} animate={{ y: "0%" }} transition={{ duration: 1.5 }}>
    <Header />
    <AboutUs />
    <div className="h-[50vh] bg-[#000000] text-white flex flex-col justify-center items-center">
      <div className="my-5 text-xl text-center md:text-4xl">Prepared to turn your ideas into<br /> reality? I am here to help</div>
      <button className="mx-2 text-sm border hover:bg-white hover:text-black hover:border-black px-4 py-3 rounded-3xl transition duration-200 bg-black text-white sm:text-base border-white"
        onClick={handleClick}>Contact Me</button>
    </div>
  </motion.div>
  );
}
