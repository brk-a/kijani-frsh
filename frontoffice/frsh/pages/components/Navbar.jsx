"use client"
import Image from 'next/image'
import Search from './Search'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '@/app/context/cart-context'

const Navbar = () => {
    const router = useRouter()

    const hamburgerMenu = () => { }
    const openCart = () => {
        router.push("cart")
    }

    const {
        calculation,
    } = useContext(CartContext)

    return (
        <>
            <div className='sticky top-0 left-0 right-0 flex flex-row justify-between bg-[#212529] py-6 px-12'>
                <div className='flex flex-row gap-4 justify-center items-center space-between'>
                    <RxHamburgerMenu className='lg:hidden w-[32px] h-[32px]' onClick={hamburgerMenu} />
                    <h2 className='text-white text-3xl sm:hidden lg:flex'>
                        <Link href="/">FRSH</Link>
                    </h2>
                </div>
                <div className='min-[320px]:hidden lg:flex flex-row items-center justify-center p-1 rounded-full'>
                    <Search />
                </div>
                <div className='bg-white rounded-md cursor-pointer' >
                    <Link href={'/cart'}>
                        <Image src='/assets/cart3.svg'
                            width={42}
                            height={42}
                            alt='cart_logo'
                            className='text-[#21259] text-3xl p-1'
                        />
                    </Link>
                    <div className='text-lg text-white bg-[#ff0000] absolute top-[5px] right-[33px] p-1 rounded-md'>
                        {calculation}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar