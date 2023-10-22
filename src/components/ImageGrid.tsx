import Image from 'next/image'
import React from 'react'

const ImageGrid = ({ cardList }: any) => {
    return (
        <div className='bg-[rgba(91,40,213,0.68)] w-full'>
            <div className=' mx-auto py-8 px-4'>
                <div className='grid place-items-center  gap-2 md:-inset-0 grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                    {
                        cardList.map((list: any, i: number) =>
                            <div key={i} className='sm:w-9/12 md:w-full px-1 md:px-5 my-2 md:my-5'>
                                <Image src={list.banner} alt={"banner"} width={280} height={280} />
                            </div>

                        )
                    }

                </div>

            </div>
        </div>
    )
}

export default ImageGrid