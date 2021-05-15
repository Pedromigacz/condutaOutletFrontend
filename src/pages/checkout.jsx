import React, { useState } from 'react';
import { CheckoutHeader, Sacola } from '../Components/'
import * as styles from '../styles/checkout.module.css'

const CheckoutPage = () => {
    const [step, setStep] = useState('sacola')
    // const displaySacola = () => {setStep('sacola')}
    // const displayEntrega = () => {setStep('entrega')}
    // const displayPagamento = () => {setStep('pagamento')}

    return (
        <div className={styles.checkoutOuterContainer}>
            <CheckoutHeader step={step}/>
            <div>
                {step === 'sacola' && <Sacola />}
            </div>
        </div>
    );
}
 
export default CheckoutPage;