import Image from 'next/image'
import React from 'react'

const Trending = () => {
  return (
    <>
    <div className='flex flex-row gap-2 items-center justify-center'>
        <h2>Trending</h2>
        <Image src='/assets/fire.svg' width={24} height={24} alt='trending'/>
    </div>
    {/* <div>
        {data.map()}
    </div> */}
    </>
  )
}

export default Trending