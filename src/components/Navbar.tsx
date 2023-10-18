import React from 'react'
import { Silkscreen } from 'next/font/google'
const silkScreen = Silkscreen({ weight: "400", subsets: ['latin'], })
import { motion } from 'framer-motion'

const Navbar = () => {
    const FADE_DOWN_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } },
    };
    return (
        <motion.div
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.15,
                    },
                },
            }}
        >
            <div className='bg-[#FAF5EF]  mx-auto flex w-full items-center justify-center md:h-12 p-3 md:p-0'>
                <h2 className={`font-semibold text-black text-lg md:text-xl lg:text-2xl ${silkScreen.className}`}><motion.h1
                    className=" tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]"
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                >Polydolls </motion.h1></h2>
            </div >
        </motion.div>
    )
}

export default Navbar