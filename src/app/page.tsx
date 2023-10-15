import Navbar from '@/components/Navbar'
import { Silkscreen } from 'next/font/google'
import Link from 'next/link'
const silkScreen = Silkscreen({ weight: "400", subsets: ['latin'], })


export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='border-2 border-white flex flex-col justify-center items-center bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBSrSyaSJxm4KCjbEQ5uyW9FwRneaOnrEsA&usqp=CAU")] w-full h-full bg-no-repeat bg-center bg-cover bg-fixed'>
        <div className='w-full my-10 flex flex-col items-center '>

          <div className='min-h-100 max-w-96 my-12 md:my-28 flex flex-col items-center '>
            <h1 className={`text-white ${silkScreen.className} text-3xl md:text-[70px] lg:md:text-[86px]  textshadow`}>Polydolls LOGO</h1>
            <h3 className='text-white text-lg w-9/12 md:w-11/12 text-center mx-auto my-5 md:my-10'>20,000 unique crypto investors on the blockchain with commercial rights.</h3>
            <button className='text-white font-semibold  border-black w-9/12 md:w-[200px]  bg-red-200 h-12 rounded-md bg-gradient-to-br from-purple-600 via-red-500 to-transparent custom-gradient'> View on OpenSea</button>
          </div>

          <div className='h-72 lg:h-[500px]  w-full bg-pink-500 bg-[url(/Banner1.webp)] bg-no-repeat bg-cover bg-center'>
          </div>

          <div className=' max-w-96 my-32 md:my-28 flex flex-col items-center'>
            <h1 className={`text-white ${silkScreen.className} text-center md:leading-[70px] text-3xl md:text-[70px] lg:md:text-[86px]   textshadow`}>Commercial Rights</h1>
            <h3 className='text-white text-[18px] w-11/12 md:w-10/12 text-center mx-auto my-5 md:my-10'>Nakamigos holders are granted the same commercial rights as Yuga Labs provided for CryptoPunks. The Nakamigos license is <Link className='text-cyan-500' href={"#"}>here</Link></h3>
          </div>

          <div className='h-72 lg:h-[500px]  w-full bg-pink-500 bg-[url(/Banner1.webp)] bg-no-repeat bg-cover bg-center'>
          </div>

          <div className=' w-full pt-12 md:my-28 flex flex-col items-center'>
            <h1 className={`text-white ${silkScreen.className} text-3xl md:text-[70px] lg:md:text-[86px]   textshadow`}>FAQ</h1>
            <h3 className=' w-11/12 mx-auto text-center font-semibold  text-white my-10'>FAQ and Mint info can be found in <Link className='text-[#00E0FF]' href={"#"}>Nakamigos Mint 101</Link> </h3>
            <Link href={"#"} className='text-white font-semibold  border-black w-9/12 md:w-[200px]  bg-red-200 h-12 rounded-md bg-gradient-to-br from-purple-600 via-red-500 to-transparent custom-gradient text-center grid place-items-center'>Mint Here</Link>
          </div>

          <Link href={"#"} className='h-10 w-10 border-2 rounded-full'></Link>
        </div>
        <footer className='text-white text-[15px] mb-20 text-center w-9/12 mx-auto'>Created by <Link href={"#"} className='text-[#00E0FF]'>HiFo Labs</Link>. All rights reserved.</footer>
      </div>

    </main>
  )
}
