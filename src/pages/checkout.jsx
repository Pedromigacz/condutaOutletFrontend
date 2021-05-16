import React, { useState } from 'react';
import { CheckoutHeader, Sacola, CheckoutComander, Entrega } from '../Components/'
import * as styles from '../styles/checkout.module.css'

const stepDisplayer = (step) => {
    if(step === 'sacola') return <Sacola />
    if(step === 'entrega') return <Entrega />
}

const CheckoutPage = () => {
    const [step, setStep] = useState('sacola')
    // const displaySacola = () => {setStep('sacola')}
    const displayEntrega = () => {setStep('entrega')}
    // const displayPagamento = () => {setStep('pagamento')}    

    return (
        <div className={styles.checkoutOuterContainer}>
            <CheckoutHeader step={step}/>
            <div className={styles.checkoutInnerConatiner}>
                {stepDisplayer(step)}
                <CheckoutComander displayEntrega={displayEntrega} />
            </div>
        </div>
    );
}
 
export default CheckoutPage;