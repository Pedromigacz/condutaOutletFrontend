import React, { useState } from 'react';
import { CheckoutHeader, Sacola, CheckoutComander, Entrega } from '../Components/'
import * as styles from '../styles/checkout.module.css'
import { AnimatePresence } from 'framer-motion'
import Helmet from 'react-helmet'

const CheckoutPage = () => {
    const [step, setStep] = useState('sacola')
    const [error, setError] = useState('')
    // const displaySacola = () => {setStep('sacola')}
    const displayEntrega = () => {setStep('entrega')}
    // const displayPagamento = () => {setStep('pagamento')}
    
    const stepDisplayer = (step) => {
        if(step === 'sacola') return <Sacola key="1"/>
        if(step === 'entrega') return <Entrega key="2" error={error} setError={setError}/>
    }

    return (
        <>
        <Helmet>
            <meta name={`robots`} content={`noindex, nofollow`}/>
        </Helmet>
        <div className={styles.checkoutOuterContainer}>
            <CheckoutHeader step={step}/>
            <div className={styles.checkoutInnerConatiner}>
                <AnimatePresence exitBeforeEnter>
                    {stepDisplayer(step)}
                </AnimatePresence>
                <CheckoutComander displayEntrega={displayEntrega} step={step} setError={setError}/>
            </div>
        </div>
        </>
    );
}
 
export default CheckoutPage;