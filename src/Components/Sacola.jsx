import React, { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext'
import { ContactContext } from '../contexts/ContactContext'
import * as styles from '../styles/Sacola.module.css'
import { SideCartCard } from './'

const Sacola = () => {
    const { cart, closeCart, removeItemFromCart } = useContext(CartContext)
    const { openContactModal } = useContext(ContactContext)
    
    useEffect(() => {
        closeCart()
    }, [])

    return (
        <div>
            <div className={styles.sacolaContainer}>
                <div className={styles.sacola}>
                    {cart.map((line, key) => (
                        <SideCartCard key={key} id={key} line={line} removeItemFromCart={removeItemFromCart}/>
                        ))}
                </div>
            </div>
            <br />
            <div className={styles.helpContainer}>
                <h4 className={styles.helpDisclaimer}>Precisa de ajuda?</h4>
                <button
                    className={styles.contactButton}
                    onClick={openContactModal}
                >Clicke aqui</button>
            </div>
        </div>
    );
}
 
export default Sacola;