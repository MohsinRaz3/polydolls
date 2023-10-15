import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className=' flex flex-col justify-center items-center bg-[url(https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/secured-attachments/messaging_message/attachment/d418f4e80b0cadaa8f9ddbbad51747ec-1696415165034/Polydolls%20BG%20No%20Logo.png?__cld_token__=exp=1696486761~hmac=6360236ced02b88c906c0272621a26021e87be0a8cdd394ae5a7c1c3df769882)] w-full h-full bg-no-repeat bg-center bg-cover bg-fixed'>
        <div className='m-10 flex flex-col items-center'>

          <div className='h-72 w-96 pt-32 flex flex-col items-center'>
            <h1 className='text-white'>Polydolls LOGO</h1>
            <h3 className='text-white'>1000 unique crypto investros on blockchiain</h3>
            <button className='border-black bg-red-200 h-12 w-36 rounded-md'> View on OpenSea</button>
          </div>

          <div className='h-72 w-[1200px] bg-pink-500'>
            <h1 className='text-white'>Banner image two rows</h1>
          </div>

          <div className='h-72 w-96 pt-32 flex flex-col items-center'>
            <h1 className='text-white'>Commercial rights</h1>
            <h3 className='text-white'>Polydolls holders are granted the same commercial rights</h3>
          </div>

          <div className='h-72 w-[1200px] bg-pink-500'>
            <h1 className='text-white'>Banner image two rows</h1>
          </div>

          <div className='h-72 w-96 pt-32 flex flex-col items-center'>
            <h1 className='text-white'>FAQ</h1>
            <h3 className='text-white'>Visit Mint page to mint NFTs</h3>
            <button className='border-black bg-red-200 h-12 w-36 rounded-md'>Mint Here</button>
          </div>

        </div>
      </div>

    </main>
  )
}
