import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'
import * as styles from '../styles/CheckoutComander.module.css'

const centsToReais = cents => (cents/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' });

const CheckoutComander = ({ displayEntrega }) => {
    const { cart, totalPrice } = useContext(CartContext)

    return (
        <div className={styles.CCContainer}>
            <div className={styles.CCLine}>
                <span>{cart.lendgth} Produtos</span>
                <span>{centsToReais(totalPrice)}</span>
            </div>
            <div className={styles.CCLine}>
                <span>Entrega</span>
                <span className={styles.freeFreightColor}>Frete Grátis</span>
            </div>
            <div className={styles.CCMainLine}>
                <span>TOTAL</span>
                <span className={styles.CCMainLinePrice}>{centsToReais(totalPrice)}</span>
            </div>
            <button
                className={styles.nextStepButton}
                onClick={displayEntrega}
            >FINALIZAR COMPRA</button>
        </div>
    );
}
 
export default CheckoutComander;