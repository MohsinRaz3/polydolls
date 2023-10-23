import React from 'react'


export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className={` text-white my-5  md:my-14 font-semibold  border-black w-9/12 mm:w-6/12 md:w-[200px] py-2 md:py-3 lg:py-4 full rounded-md bg-gradient-to-br from-amber-700 via-amber-500 to-transparent  motion-reduce:hover:transform-none custom-gradient `}> {children}</button>
    )
}
