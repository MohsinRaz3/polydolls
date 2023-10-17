"use client"
import Navbar from '@/components/Navbar'
import { Silkscreen } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import { Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

const silkScreen = Silkscreen({ weight: "400", subsets: ['latin'] })

export default function Home() {
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

      <main>
        <Navbar />
        <div className=' flex flex-col justify-center items-center bg-[url("https://res.cloudinary.com/dj23jud85/image/upload/v1697451403/bg_sfjmts.webp")] w-full h-full bg-no-repeat bg-cover md:bg-top bg-center bg-fixed'>
          <div className='w-full flex flex-col items-center '>

            <div className='min-h-100 w-12/12 mb-10 my-12 md:my-10  flex flex-col items-center '>
              <div className='w-[12/12] h-full  md:pl-12 ml:mt-[-1rem] md:mt-[-2rem] lg:mt-[-2rem] xl:mt-[-1rem] '>   <motion.h1
                className=" tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]"
                variants={FADE_DOWN_ANIMATION_VARIANTS}
              >  <Image src={"/logo2.png"} height={1000} width={500} className=' ' alt='polydolls logo Nfts'></Image> </motion.h1>
              </div>              {/* <h1 className={`text-white ${silkScreen.className} text-3xl md:text-[70px] lg:md:text-[86px]  textshadow`}>Polydolls LOGO</h1> */}
              {/* <h3 className='text-white text-lg md:text-2xl md:font-medium w-11/12 text-center mx-auto my-5 md:my-10'>30,000 Polygon citizens, eager for their ancestral nest. Mint now to pave their voyage home and earn commercial rights.</h3> */}
              <Link className='w-9/12 mm:w-6/12 md:w-[200px] m-auto' href={"https://mint.polydolls.io"} target='_blank'><button className='w-full  text-white my-5  md:my-14 md:mt-13 lg:mt-12 md:mb-28 font-semibold  border-black  py-2 md:py-3 lg:py-4 full rounded-md bg-gradient-to-br from-amber-700 via-amber-500 to-transparent custom-gradient'> Mint Now</button></Link>
            </div>

            <div className='h-72 lg:h-[500px]  w-full  bg-[url(/Banner1.png)] bg-no-repeat bg-cover bg-center'>
            </div>

            <div className=' max-w-96 my-32 md:my-28 flex flex-col items-center'>
              <div className={`text-white ${silkScreen.className} text-center md:leading-[70px] text-3xl md:text-[70px] lg:md:text-[86px]   textshadow`}>
                <motion.h1
                  className=" tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]"
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                > Commercial Rights</motion.h1></div>
              <div className='text-white text-lg md:text-2xl md:font-medium w-11/12 md:w-10/12 text-center mx-auto my-5 md:my-10'>
                <motion.h1
                  className=" tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]"
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                > Polydolls holders are granted the same commercial rights as Yuga Labs provided for CryptoPunks. The Polydolls license is <Link className='text-cyan-500' target='_blank' href={"/License"}>here</Link></motion.h1></div>
            </div>

            <div className='h-72 lg:h-[500px]  w-full  bg-[url(/Banner2.png)] bg-no-repeat bg-cover bg-center'>
            </div>

            <div className=' w-full pt-12 md:my-20 lg:my-28 flex flex-col items-center'>
              <h1 className={`text-white ${silkScreen.className} text-3xl md:text-[70px] lg:md:text-[86px]   textshadow`}>FAQ</h1>
              <h3 className=' w-11/12 mx-auto text-lg md:text-2xl md:font-medium text-center font-semibold  text-white my-10'> <motion.h1
                className=" tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]"
                variants={FADE_DOWN_ANIMATION_VARIANTS}
              >FAQ and Mint info can be found in <Link className='text-[#00E0FF] underline' href={"#"}>Polydolls Mint 101</Link></motion.h1> </h3>
              {/* <Link href={"#"} className='text-white font-semibold  border-black w-9/12 md:w-[200px]  bg-red-200 h-12 rounded-md bg-gradient-to-br from-purple-600 via-red-500 to-transparent custom-gradient text-center grid place-items-center'>Mint Here</Link> */}
              <Link className='mb-2 w-9/12 mm:w-6/12 md:w-[200px] m-auto' href={"https://opensea.io/collection/polydolls"} target='_blank'> <button className=' text-white font-semibold  border-black w-full py-2 md:py-3 lg:py-4 full rounded-md bg-gradient-to-br from-amber-700 via-amber-500 to-transparent custom-gradient'> View On Opensea</button></Link>

            </div>

            <Link href={"#"} className='h-10 w-10 my-5 md:my-0  border-2 rounded-full'> <div className='pt-1.5 px-1.5'><Twitter color="#ffffff" /></div></Link>
          </div>
          <footer className='text-white text-[15px]  md:text-lg md:font-medium mb-20 text-center w-9/12 mx-auto'>
            <motion.h1
              className=" tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >Created by <Link href={"#"} target='_blank' className='text-[#00E0FF]'>ICHIMANstudios</Link>. All rights reserved.</motion.h1></footer>
        </div>

      </main>

    </motion.div >
  )
}
