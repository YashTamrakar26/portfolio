import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {

    let router = useRouter();
    function handleClick() {
        router.push("/Contact");
    }
    return (
        <div className="flex justify-center h-[90vh] sm:h-[80vh] md:px-[5%] lg:px-[10%]">
            <div className=" w-[80%] flex justify-center flex-col md:w-[50%]">
                <div>WEB DEVELOPER</div>
                <div className=" text-6xl font-bold my-[3%]">Hello, my name is <br /><span className="text-5xl">Yash Tamkar</span> </div>
                <div className="my-[3%]">I was not a code lover before college, my journey into coding began the moment I entered college. I was not sure what I wanted to do or how to do it. But as soon as I started the learning process, I fell in love with it. The process of learning, creating, and getting better at something thrives me.</div>
                <div className="flex">
                    <button className="mx-2 text-sm border border-black px-4 py-3 rounded-3xl transition duration-200 hover:bg-black hover:text-white sm:text-base" onClick={handleClick}>Contact Me</button>
         
                </div>
            </div>
            <div className="hidden w-[50%] md:block my-auto">
                <Image src="/Home/Profile.png" width={500} height={500} alt="pp" className="mx-auto" />
            </div>
        </div>)
}