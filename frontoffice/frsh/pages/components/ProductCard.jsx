"use client"

import { NumberFormat } from 'jsx-number-format'
import Image from 'next/image'
import { useState, useMemo } from 'react'
import productData from '@/dump/productData'

const ProductCard = ({ id, image, title, description, price }) => {
  const [cart, setCart] = useState(localStorage.getItem("data") || [])
  const [quantityToCart, setQuantityToCart] = useState(0)
  const [calculation, setCalculation] = useState(0)

  const increment = (e) => {
    // e.preventDefault()
    setQuantityToCart(quantityToCart + 1)
    const search = cart.find(obj => obj.id === e.target.id)

    if (search === undefined) return

    if (search !== undefined) { //exists in cart
      console.info(`search: ${search}`, search)
      update(search.id)
    } else {
      setCart(prev => [...prev, { id: e.target.id, quantity: quantityToCart }])
    }

    localStorage.setItem("data", JSON.stringify(cart))

    console.info(`cart, incr: ${cart}`, cart)
  }
  const decrement = (e) => {
    // e.preventDefault()
    quantityToCart < 0 ? 0 : setQuantityToCart(quantityToCart - 1)
    const search = cart.find(obj => obj.id === e.target.id)

    if (search === undefined) return

    if (search !== undefined) { //exists in cart
      console.info(`search: ${search}`, search)
      update(search.id)
      cart.filter(obj => obj.quantity !== 0)
      localStorage.setItem("data", JSON.stringify(cart))
    }

    console.info(`cart, decr: ${cart}`, cart)
  }
  const update = (id) => {
    for (let i of cart) {
      if (id === i.id) {
        i.quantity = quantityToCart
        setCart(prev => ([...prev, i]))
      }
    }
  }

  useMemo(() => {
    const calc = cart.reduce((accumulator, item) => (
      accumulator + item.quantity
    ), 0)
    console.info(`calc: ${calc}`)
    localStorage.setItem("calculation", Json.stringify(calculation))
    return setCalculation(calc)
  }, [cart])

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