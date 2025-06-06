'use client'
import { motion, AnimatePresence, easeOut } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Navbar from '../Navbar/Navbar';

type TransitionProviderProps = {
    children: React.ReactNode
}

export default function TransitionProvider({ children }: TransitionProviderProps) {

    let pathname = usePathname();

    return (<AnimatePresence>
        <div key={pathname}>
            <motion.div className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40' animate={{ height: "0vh" }} exit={{ height: "140vh" }} transition={{ duration: 0.75, ease: "easeOut" }} />
            <motion.div className='hidden fixed m-auto top-0 bottom-0 left-0 right-0 h-fit w-fit z-50 text-6xl text-white cursor-default md:block' initial={{ opacity: 1 }} animate={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ duration: 1.25, ease: "easeOut" }}>
                {pathname == "/" ? "Home" : pathname.substring(1)}
            </motion.div>
            <motion.div className='h-screen w-screen fixed bg-black rounded-b-[100px] z-30' initial={{ height: '140vh' }} animate={{ height: "0vh", transition: { delay: 0.85 } }} />
            <Navbar />
            {children}
        </div>
    </AnimatePresence>)
} 