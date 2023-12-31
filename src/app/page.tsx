"use client"
import Navbar from '@/components/Navbar'
import { Silkscreen } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Twitter } from 'lucide-react'
import { motion } from 'framer-motion'
import ImageGrid from '@/components/ImageGrid'
import { cardList, cardList2 } from '@/components/data'
import localFont from "next/font/local"

const mergeOne = localFont({ src: "../../fonts/merge-one.ttf" })
const poppinsMed = localFont({ src: "../../fonts/Poppins-Medium.ttf" })
const humourFont = localFont({ src: "../../fonts/Humour-Normal.ttf" })
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

      <main className=' bg-[url("/bg.png")] bg-no-repeat bg-center  w-full h-full  bg-fixed' >
        <Navbar />
        <div className=' flex flex-col justify-center items-center  md:bg-[url("/bg.png")] w-full h-full bg-no-repeat bg-cover md:bg-top bg-center  bg-fixed'>
          <div className='w-full flex flex-col items-center '>

            <div className='min-h-100 w-12/12 mb-4 mt-12 md:my-10 md:mr-14 flex flex-col items-center '>
              <div className='w-[12/12] h-full md:pl-12 sm:mt-[-3rem] ml:mt-[-4rem] md:mt-[-2rem] lg:mt-[-0.2rem] xl:mt-[-1rem] '>   <motion.h1
                className=" tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]"
                variants={FADE_DOWN_ANIMATION_VARIANTS}
              >  <Image src={"/ulogo.png"} height={1000} width={500} className='mt-16 -mb-8 md:mt-2 md:w-[700px]' alt='polydolls logo Nfts'></Image> </motion.h1>
              </div>              {/* <h1 className={`text-white ${silkScreen.className} text-3xl md:text-[70px] lg:md:text-[86px]  textshadow`}>Polydolls LOGO</h1> */}
              {/* <h3 className='text-white text-lg md:text-2xl md:font-medium w-11/12 text-center mx-auto my-5 md:my-10'>30,000 Polygon citizens, eager for their ancestral nest. Mint now to pave their voyage home and earn commercial rights.</h3> */}
              <Link className='w-9/12 mm:w-6/12 md:w-[200px] m-auto  ' href={"https://polydolls.netlify.app"} target='_blank'><button className={`${humourFont.className}  w-full  bg-[#312040] text-white mt-12 md:ml-6  md:my-12 md:mt-16 lg:mt-[45px] md:mb-28 font-medium text-stroke text-xs md:text-sm border-black  py-2 md:py-3 lg:py-4 full rounded-md  custom-gradient `}> MINT ME!</button></Link>
            </div>

            {/* <div className='h-72 lg:h-[500px]  w-full  bg-[url(/Banner1.png)] bg-no-repeat bg-cover bg-center'></div> */}
            <ImageGrid cardList={cardList} />


            <div className=' max-w-96 mt-32  md:mt-24 md:mb-10 flex flex-col items-center '>
              {/* <div className={`text-[#B8D1FE] ${humourFont.className} text-center md:leading-[70px] text-3xl md:text-[70px] lg:md:text-[86px]   textshadow`}>
                <motion.h1
                  className=" tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]"
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                > Universal Rights</motion.h1></div>
              <div className='text-white text-lg md:text-2xl md:font-medium w-11/12 md:w-10/12 text-center mx-auto my-5 md:my-10'>
                <motion.h1
                  className={`${humourFont.className} tracking-[-0.02em] drop-shadow-sm md:leading-[2.25rem]`}
                  variants={FADE_DOWN_ANIMATIsON_VARIANTS}
                ><div > <p>AS A POLYDOLLS HOLDER,</p> <p>YOU'RE GRANTED A BROAD, SUBLICENSABLE LICENSE TO US AND EXPLOIT YOUR </p> <p> POLYDOLLS ART FOR BOTH COMMERCIAL AND NON-COMMERCIAL PURPOSES, ACROSS ALL MEDIA.</p> </div> <br /> <p> THE POLYDOLLS LICENSE IS <Link className='text-cyan-500' target='_blank' href={"/License"}>HERE</Link> </p> </motion.h1></div> */}


              <div className={`${humourFont.className} text-center mx-auto px-3 md:px-5 w-full text-stroke text-white text-xs md:text-sm lg:px-44 lg:-mt-24  pt-8 md:my-20 lg:my-28 flex flex-col items-center mb-44`}>
                <Image src={'/rightsbb.png'} height={1080} width={1920} alt='faqm' className='md:hidden px-2 md:w-[1920px] -mb-40'></Image>
                <Image src={"/rightsaa.png"} height={1080} width={1920} className='invisible md:visible md:w-[1920px]' alt='faqpc'></Image>


                <p className='visible md:invisible tracking-[-0.02em] drop-shadow-sm leading-[1.3rem] -mt-2'>AS A POLYDOLLS HOLDER, <br />YOU'RE GRANTED A BROAD, SUBLICENSEABLE LICENSE <br />TO USE AND EXPLOIT YOUR POLYDOLLS ART FOR BOTH COMMERCIAL AND NON-COMMERCIAL PURPOSES, ACROSS ALL THE MEDIA. <br />THE POLYDOLLS LICENSE IS   <Link target='_blank' href={"/License"}><span className='text-[#11B8CC] text-stroke'> HERE.</span>  </Link></p>
                <p className='invisible md:visible tracking-[-0.02em] drop-shadow-sm leading-[1.5rem] -mt-36'>AS A POLYDOLLS HOLDER, <br /> YOU'RE GRANTED A BROAD, SUBLICENSEABLE LICENSE TO USE AND EXPLOIT YOUR <br />POLYDOLLS ART FOR BOTH COMMERCIAL AND NON-COMMERCIAL PURPOSES, ACROSS ALL THE MEDIA. <br />THE POLYDOLLS LICENSE IS   <Link target='_blank' href={"/License"}><span className='text-[#11B8CC] text-stroke'> HERE.</span>  </Link></p>

              </div>
              {/* <Image src={"/uurightsb.png"} height={1080} width={1920} className='md:hidden px-2 md:w-[1920px]' alt='polydolls logo Nfts'></Image>
                <Image src={"/uurightsaa.png"} height={1080} width={1920} className='invisible md:visible sm:-mb-6 sm:mt-2 mt-2 md:mb-24 md:w-[1920px]' alt='polydolls logo Nfts'></Image> */}

            </div>
            {/* <div className='h-72 lg:h-[500px]  w-full  bg-[url(/Banner2.png)] bg-no-repeat bg-cover bg-center'> </div> */}
            <ImageGrid cardList={cardList2} />

            <div className=' w-full pt-0 md:pt-8 md:my-0 lg:my-0 flex flex-col items-center'>
              {/* <h1 className={`text-[#B8D1FE] ${humourFont.className} text-3xl md:text-[70px] lg:md:text-[86px]   textshadow`}>FAQ</h1>
              <div className=' w-11/12 mx-auto text-lg md:text-2xl md:font-medium text-center font-semibold  text-white my-10'> <motion.h1
                className={`${humourFont.className} tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]`}
                variants={FADE_DOWN_ANIMATION_VARIANTS}
              >FIND FREQUENTLY ASKED QUESTIONS AND DETAILED MINTING GUIDLINES <Link className='text-cyan-500' target='_blank' href={"/"}>HERE.</Link></motion.h1> </div> */}
              {/* <Link href={"#"} className='text-white font-semibold  border-black w-9/12 md:w-[200px]  bg-red-200 h-12 rounded-md bg-gradient-to-br from-purple-600 via-red-500 to-transparent custom-gradient text-center grid place-items-center'>Mint Here</Link> */}





              <div className={`${humourFont.className} text-center mx-auto px-3 w-full text-stroke text-white text-xs md:my-20 lg:my-28 `}>
                <Image src={"/faqbbb.png"} height={1080} width={1920} className='md:hidden -z-10 mt-8 mb-6 md:mb-0 md:mt-0 md:w-[1920px]' alt='faqm'></Image>
                <Image src={"/faqaaa.png"} height={1080} width={1920} className='invisible md:visible sm:mt-2 md:w-[1920px]' alt='polydolls logo Nfts'></Image>

                <p className='visible md:invisible leading-[1.2rem] -mt-48 mb-24'>FREQUENTLY ASKD QUESTION AND <br /> DETAILED MINTING GUIDE  <Link target='_blank' href={"/License"}><span className='text-[#11B8CC] text-stroke'> HERE.</span></Link></p>
                <p className='invisible md:visible leading-[1.2rem] -mt-10 md:text-sm'>FREQUENTLY ASKD QUESTION AND DETAILED MINTING GUIDE  <Link target='_blank' href={"/License"}><span className='text-[#11B8CC] text-stroke'> HERE.</span></Link></p>

              </div>










              <Link className='mb-2 w-9/12 z-10 mm:w-6/12 md:w-[200px] m-auto' href={"https://opensea.io/collection/polydolls"} target='_blank'> <button className={` text-white font-medium text-xs md:text-sm   border-black w-full py-2 mb-10 md:py-3 lg:py-4 full rounded-md bg-gradient-to-br from-amber-700 via-amber-500 to-transparent custom-gradient text-stroke  ${humourFont.className} `}> <p> VIEW ON OPENSEA</p>
              </button></Link>

            </div>

            <Link href={"https://twitter.com/polydolls"} className='h-10 w-10 z-10  my-5 md:my-0 border-2 rounded-full'> <div className='pt-1.5 px-1.5'><Twitter color="#ffffff" /></div></Link>
          </div>
          <footer className={`text-[#ffffff]  mb-44 md:mb-0  md:text-lg md:font-medium text-center w-9/12 mx-auto  ${humourFont.className} `}>
            {/* <Image src={"/mobilecb4.png"} height={1080} width={1920} className='md:hidden  mx-auto   h-[140px] w-[750px] md:mb-0 md:mt-0 md:w-[1920px]' alt='polydolls logo Nfts'></Image>
            <Image src={"/cbb.png"} height={100} width={850} className='mx-auto  invisible md:visible -mt-36 md:w-[900px] h-[450px]' alt='created by'></Image> */}
            <div className='text-white text-xs md:text-sm text-center mx-auto my-5 md:my-10'>
              <p className={`${humourFont.className} text-center mx-auto px-3 text-stroke `}>
                CREATED BY <span className='text-[#11B8CC] text-stroke'> ICHIMANstudios.</span> ALL RIGHTS RESERVED. </p> </div>
          </footer>
        </div>

      </main>

    </motion.div >
  )
}
