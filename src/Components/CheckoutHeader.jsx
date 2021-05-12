import React from 'react';
import * as styles from '../styles/CheckoutHeader.module.css'
import { motion } from 'framer-motion'


const CheckoutHeader = ({ step }) => {
    return (
        <div className={styles.CHOuterContainer}>
            <div className={styles.CHInnerContainer}>
                <span className={styles.CDIconPageContainer}>
                    <div className={styles.CHIndicatorContainer}>
                        <motion.div
                            animate={{
                                backgroundColor: (step === 'sacola') ? '#09ECA0' : 'transparent',
                                color: (step === 'sacola') ? '#fff' : '#202026',
                                border: (step === 'sacola') ? 'none' : '2px solid #202026'
                            }}
                            className={styles.CHIndicator}
                        >1</motion.div>
                    </div>
                    <span className={styles.CHLabel}>Sacola</span>
                </span>
                <span className={styles.CDIconPageContainer}>
                    <div className={styles.CHIndicatorContainer}>
                        <motion.div
                            animate={{
                                backgroundColor: (step === 'entrega') ? '#09ECA0' : 'transparent',
                                color: (step === 'entrega') ? '#fff' : '#202026',
                                border: (step === 'entrega') ? 'none' : '2px solid #202026'
                            }}
                            className={styles.CHIndicator}
                        >2</motion.div>
                    </div>
                    <span className={styles.CHLabel}>Entegra</span>
                </span>
                <span className={styles.CDIconPageContainer + ' ' + styles.noMarginRight}>
                    <motion.div
                        animate={{
                            backgroundColor: (step === 'pagamento') ? '#09ECA0' : 'transparent',
                            color: (step === 'pagamento') ? '#fff' : '#202026',
                            border: (step === 'pagamento') ? 'none' : '2px solid #202026'
                        }}
                        className={styles.CHIndicator}
                    >3</motion.div>
                    <br/>
                    <span className={styles.CHLabel}>Pagamento</span>
                </span>
            </div>
        </div>
    );
}
 
export default CheckoutHeader;