import React, { createContext, useState, useEffect } from 'react';
import { SideCart } from '../Components/'

export const CartContext = createContext()

const CartContextProvider = props => {
    const [cart, setCart] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    const addItemToCart = item => {
        setCart([...cart, item])
        openCart(true)
    }

    const removeItemFromCart = index => {
        const newCart = cart.filter((line, i) => i !== index)
        setCart(newCart)
    }

    const openCart = () => {setIsCartOpen(true)}
    const closeCart = () => {setIsCartOpen(false)}

    useEffect(() => {
        if(cart.length === 0) return setTotalPrice(0)
        const newPrice = cart.reduce(((acum, line) => (acum + line.secondary.preco)), 0)
        setTotalPrice(newPrice)
    }, [setTotalPrice, cart])

    return (
        <CartContext.Provider value={{ addItemToCart, openCart }}>
            <SideCart isCartOpen={isCartOpen} closeCart={closeCart} cart={cart} totalPrice={totalPrice} removeItemFromCart={removeItemFromCart}/>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;