"use client"

import { NumberFormat } from 'jsx-number-format'
import Image from 'next/image'
import { useState, useContext } from 'react'
import { CartContext } from '@/app/context/cart-context'

const ProductCard = ({ id, image, title, description, price }) => {

    const [quantityToCart, setQuantityToCart] = useState(0)
    const {
        calculation,
        cart,
        setCalculation
    } = useContext(CartContext)


    const increment = (e) => {
        // e.preventDefault()
        setQuantityToCart(quantityToCart + 1)
        setCalculation(calculation + 1)
        const search = cart.find(obj => obj.id == e.target.id)

        if (search === undefined){
            console.info("not found")
            return
        }

        if (search !== undefined) { //exists in cart
            search.quantity += 1
        }
        console.info(`cart, incr: ${cart}`, cart)
    }
    const decrement = (e) => {
        // e.preventDefault()
        quantityToCart <= 0 ? 0 : setQuantityToCart(quantityToCart - 1)
        quantityToCart <= 0 ? 0 : calculation <= 0 ? 0 : setCalculation(calculation - 1)
        const search = cart.find(obj => obj.id == e.target.id)

        if (search === undefined) return

        if (search !== undefined) { //exists in cart
            search.quantity = 0 ? 0 : search.quantity -= 1
        }

        console.info(`cart, decr: ${cart}`, cart)
    }

    

    return (
        <>
            <Image src={image} width={320} height={400} alt={`${title}`} />
            <div className='flex  flex-col gap-3 p-3 text-black'>
                <h3 className=' text-xl text-opacity-100'>
                    {title}
                </h3>
                <p className='text-lg text-black/75'>
                    {description}
                </p>
                <div className='flex flex-row justify-between items-center'>
                    <div className='flex flex-row gap-2'>
                        <h2 className='text-md'>
                            KES {NumberFormat(price, 2, ",")}
                        </h2>
                        <p className='text-black/75 text-xs'>
                            per kg
                        </p>
                    </div>
                    <div className='flex flex-row items-center p-1 gap-1'>
                        <Image src='assets/dash-lg.svg'
                            width={12}
                            height={12}
                            alt='minus'
                            className='stroke-2 stroke-red-400 hover:stroke-red-700 fill-red-400 hover:fill-red-700'
                            onClick={decrement}
                            id={id}
                        // value={item}
                        />
                        <div>{quantityToCart > 0 ? quantityToCart : 0}</div>
                        <Image src='assets/plus-lg.svg'
                            width={12}
                            height={12}
                            alt='plus'
                            className='stroke-2 stroke-green-400 hover:stroke-green-700 fill-green-400 hover:fill-green-700'
                            onClick={increment}
                            id={id}
                        // value={item}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard