import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext'
import * as styles from '../styles/CheckoutComander.module.css'
import axios from 'axios'
import { LoadingAnimation } from './'

const centsToReais = cents => (cents/100).toLocaleString("pt-BR", {style: 'currency', currency: 'BRL' });

const CheckoutComander = ({ displayEntrega, step, setError }) => {
    const { cart, totalPrice, address } = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    const fetchPaymentIntent = () => {
        setLoading(true)
        const obj = {
            address,
            order: cart.map(item => item.main)
        }
        
        if(!address.cep) {
            setLoading(false)
            return setError('Preencha o cep antes de finalizar a compra')
        }
        if(!address.estado || !address.cidade) {
            setLoading(false)
            return setError('Clicke em "Buscar" antes de finalizar a compra')
        }
        if(!address.bairro) {
            setLoading(false)
            return setError('Insira um bairro antes de finalizar a compra')
        }
        if(!address.rua) {
            setLoading(false)
            return setError('Insira uma rua antes de finalizar a compra')
        }
        if(!address.numero) {
            setLoading(false)
            return setError('Insira um número de endereço antes de finalizar a compra')
        }

        axios({
            method: 'post',
            url: process.env.GATSBY_PAYMENT_ENDPOINT ? process.env.GATSBY_PAYMENT_ENDPOINT : 'http://localhost:1337/pedidos',
            data: obj
          })
            .then(res => {
                window.location.href = res.data.PaymentLink
                setLoading(false)
            })
            .catch(err => {
                setError('Algo de errado ocorreu')
                setLoading(false)
            })

    }

    const handleCheckout = () => {
        if(step === 'sacola') return displayEntrega()
        if(step === 'entrega') return fetchPaymentIntent()
    }

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
                onClick={handleCheckout}
            >{loading ? <LoadingAnimation /> : 'FINALIZAR COMPRA'}</button>
        </div>
    );
}
 
export default CheckoutComander;