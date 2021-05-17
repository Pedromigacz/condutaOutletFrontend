import React, { useContext, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext'
import { ContactContext } from '../contexts/ContactContext'
import * as styles from '../styles/Sacola.module.css'
import { SideCartCard } from './'
import { motion } from 'framer-motion'

const stepVariants = {
    initial: {
      opacity: 0,
      x: 800,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    },
    exit: {
        opacity: 0,
        x: -800,
        transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    }
}

const Sacola = () => {
    const { cart, closeCart, removeItemFromCart } = useContext(CartContext)
    const { openContactModal } = useContext(ContactContext)
    
    useEffect(() => {
        closeCart()
    }, [closeCart])

    return (
        <motion.div
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
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
        </motion.div>
    );
}
 
export default Sacola;