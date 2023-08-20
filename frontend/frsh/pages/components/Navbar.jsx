import Image from 'next/image'
import React from 'react'
import Search from './Search'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  const hamburgerMenu = () => {}
  return (
    <>
    <div className='relative flex flex-row justify-between bg-[#212529] py-6 px-12'>
      <div>
        <h2 className='text-white text-3xl'>FRSH</h2>
        <RxHamburgerMenu className='lg:hidden w-[24px] h-[24px]' onClick={hamburgerMenu}/>
      </div>
      <div className='min-[320px]:hidden lg:flex flex-row items-center justify-center p-1 rounded-full'>
        <Search/>
      </div>
      <div className='bg-white rounded-md'>
        <Image src='/assets/cart3.svg'
          width={42}
          height={42}
          alt='cart_logo'
          className='text-[#21259] text-3xl p-1'
        />
        <div className='text-lg text-white bg-[#ff0000] absolute top-[5px] right-[33px] p-1 rounded-md'>
          33
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar