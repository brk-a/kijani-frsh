"use client"
import { createContext, useState, useEffect } from "react";
import productData from '@/dump/productData'


export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [calculation, setCalculation] = useState(0)

    // const calc = () => {
    //     const tot = cart.reduce((acc, obj) => (acc + obj.quantity), 0)
    //     setCalculation(tot)
    // }

    useEffect(() => {
        const initCart = productData.map(product => (
            {
                id: product.id,
                image: product.image,
                title: product.title,
                quantity: 0,
                unitPrice: product.price,
            }
        ))
        setCart(initCart)
    }, [])

    return (
        <CartContext.Provider value={{
            cart,
            // calc,
            calculation,
            setCart,
            setCalculation
        }}>
            {children}
        </CartContext.Provider>
    )
}
