import { createContext, useState, useEffect, useContext } from "react";
import productData from '@/dump/productData'

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
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

    const calc = () => {
        const tot = cart.length > 0
        ? cart.reduce((acc, obj) => (acc + obj.quantity), 0)
        : 0
        setCalculation(tot || 0)
    }


    useEffect(() => {
        calc()
    }, [])

    return (
        <CartContext.Provider value={{
            cart,
            calc,
            increment,
            decrement,
            update,
            calculation,
            quantityToCart,
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