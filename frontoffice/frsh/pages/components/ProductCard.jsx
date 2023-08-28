"use client"

import { NumberFormat } from 'jsx-number-format'
import Image from 'next/image'
import React, {useState} from 'react'
import productData from '@/dump/productData'

const ProductCard = ({id, image, title, description, price}) => {
  const [cart, setCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  
  const increment = (e) => {
    e.preventDefault()
    setQuantity(quantity + 1)
    let search = cart.find((obj) => {obj.id===id})
    if(search!==undefined){
      search.quantityToCart += 1
      setCart(prev => prev.filter(obj => obj.id!==id).push(search))
      console.log(cart)
    }
    setCart(prev => [...prev, productData.find((obj) => {obj.id===id})])
    console.log(cart)
  }
  const decrement = (e) => {
    e.preventDefault()
    quantity<0 ? 0 : setQuantity(quantity - 1)
  }
  const update = (id) => {
    for(i of cart){
      if(id in i.id){
        i.quantityToCart = quantity
        setCart(prev => ([...prev, i]))
      }
    }
    setCart(prev => ([...prev, {}]))
  }

  return (
    <>
      <Image src={image} width={320} height={480} alt={`${title}`} />
      <div className='flex  flex-col gap-3 p-3 text-black'>
        <h3 className=' text-xl text-opacity-100'>
          {title}
        </h3>
        <p className='text-lg text-black/75'>
          {description}
        </p>
        <div className='flex flex-row justify-between items-center'>
          <h2 className='text-md'>
            KES {NumberFormat(price, 2, ",")}
          </h2>
          <p className='text-black/75 text-xs'>
            per kg
          </p>
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
            <div>{quantity>0 ? quantity : 0}</div>
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