"use client"
import { createContext, useState, useEffect, useContext } from "react";
import productData from '@/dump/productData'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [calculation, setCalculation] = useState(0)

    // const calc = () => {
    //     const tot = cart.reduce((acc, obj) => (acc + obj.quantity), 0)
    //     setCalculation(tot)
    // }

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

export const useCart = () => {
    return useContext({
        CartContext,
    })
}