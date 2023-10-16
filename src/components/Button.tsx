import React from 'react'

export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className=' text-white font-semibold  border-black w-9/12 md:w-[230px] py-2 md:py-3 lg:py-4   full rounded-md bg-gradient-to-br from-amber-700 via-amber-500 to-transparent custom-gradient'> {children}</button>
    )
}
