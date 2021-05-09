import React from 'react';
import * as styles from '../styles/SideCart.module.css'
import SideCartCloseIcon from '../vectors/SideCartCloseIcon.inline.svg'
import { SideCartCard } from './'

const SideCart = ({isCartOpen, closeCart, removeItemFromCart, cart, totalPrice}) => {
    return isCartOpen ? (
        <div className={styles.sideCartBackdrop}>
            <div className={styles.sideCart}>
                <button
                    onClick={closeCart}
                    aria-label="Fechar o carrinho"
                    className={styles.closeCartBtn}
                ><SideCartCloseIcon /></button>
                <div className={styles.sideCartLinesContainer}>
                    {cart.map((line, key) => (
                        <SideCartCard key={key} id={key} line={line} removeItemFromCart={removeItemFromCart}/>
                    ))}
                </div>
                <button className={styles.goToCheckoutBtn}>Finalizar Compra</button>
            </div>
        </div>
    ) : null
}
 
export default SideCart;