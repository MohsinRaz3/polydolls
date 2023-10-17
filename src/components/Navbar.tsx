import React from 'react'
import { Silkscreen } from 'next/font/google'
const silkScreen = Silkscreen({ weight: "400", subsets: ['latin'], })

const Navbar = () => {
    return (
        <div className='bg-white  mx-auto flex w-full items-center justify-center p-3'>
            <h2 className={`font-semibold text-black text-lg md:text-xl lg:text-2xl ${silkScreen.className}`}>Polydolls</h2>
        </div >
    )
}

export default Navbar