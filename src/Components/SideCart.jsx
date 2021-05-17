import React, { useEffect } from 'react';
import * as styles from '../styles/SideCart.module.css'
import SideCartCloseIcon from '../vectors/SideCartCloseIcon.inline.svg'
import { SideCartCard } from './'
import { motion, AnimatePresence } from "framer-motion"
import { Link } from 'gatsby'

const backDropVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 }
    }
}

const modalVariants = {
    hidden: {
      opacity: 0,
      x: 320,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    }
}

const closeCartBtnVariants = {
    hidden: {
      opacity: 0,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      rotate: 360,
      transition: { delay: 0.2, duration: 0.4, ease: 'easeOut' }
    }
}

const SideCart = ({isCartOpen, closeCart, removeItemFromCart, cart, totalPrice}) => {
    useEffect(() => {
        if(isCartOpen) {
            document.body.style["overflow-y"] = 'hidden'
            document.body.style["padding-right"] = '15px'
            
        } else {
            document.body.style["overflow-y"] = 'auto'
            document.body.style["padding-right"] = ''
        }
    }, [isCartOpen])
    
    return  (
        <AnimatePresence exitBeforeEnter>{
            isCartOpen && (
                <motion.div
                    className={styles.sideCartBackdrop}
                    variants={backDropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div
                        className={styles.sideCart}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <motion.button
                            onClick={closeCart}
                            aria-label="Fechar o carrinho"
                            className={styles.closeCartBtn}
                            variants={closeCartBtnVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <SideCartCloseIcon className={styles.closeCartIcon}/>
                        </motion.button>
                        <div className={styles.sideCartLinesContainer}>
                            {cart.map((line, key) => (
                                <SideCartCard key={key} id={key} line={line} removeItemFromCart={removeItemFromCart}/>
                                ))}
                        </div>
                        {cart.length ? <Link to="/checkout"><button className={styles.goToCheckoutBtn}>Finalizar Compra</button></Link> : <button className={styles.goToCheckoutBtn + ' ' + styles.notAllowed}>Carrinho vazio</button>}
                    </motion.div>
                </motion.div>
            )
        }</AnimatePresence>
    )
}
 
export default SideCart;