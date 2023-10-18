import Image from 'next/image'
import React from 'react'

const ImageGrid = ({ cardList }: any) => {
    return (
        <div className='bg-[rgba(24,8,8,0.88)]'>
            <div className=' mx-auto py-8 px-4'>
                <div className='grid grid-cols-5 lg:grid-cols-5'>
                    {
                        cardList.map((list: any, i: number) =>
                            <div key={i} className='px-1 md:px-5 my-2 md:my-5'>
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