import React from 'react';
import ReturnPolicyIcon from '../vectors/ReturnPolicyIcon.inline.svg'
import ShippingIcon from '../vectors/ShippingIcon.inline.svg'
import HeadsetIcon from '../vectors/HeadsetIcon.inline.svg'
import SafetyIcon from '../vectors/SafetyIcon.inline.svg'
import * as styles from '../styles/IndexIcons.module.css'

const IndexIcons = () => (
    <div className={styles.IndexIconsContainer}>
        <span className={styles.IconCard}>
            <ReturnPolicyIcon className={styles.icon}/>
            <span className={styles.cardTextContainer}>
                <h1>Política de devolução</h1>
                <h4>Troca garantida conforme o regulamento</h4>
            </span>
        </span>
        <span className={styles.IconCard}>
            <ShippingIcon className={styles.icon}/>
            <span className={styles.cardTextContainer}>
                <h1>Frete Grátis</h1>
                <h4>Durante todo o mês de inauguração</h4>
            </span>
        </span>
        <span className={styles.IconCard}>
            <HeadsetIcon className={styles.icon}/>
            <span className={styles.cardTextContainer}>
                <h1>Controle de qualidade</h1>
                <h4>Atendimento ao cliente humanizado</h4>
            </span>
        </span>
        <span className={styles.IconCard}>
            <SafetyIcon className={styles.icon}/>
            <span className={styles.cardTextContainer}>
                <h1>Compra 100% segura</h1>
                <h4>Dados criptografados</h4>
            </span>
        </span>
    </div>
)

 
export default IndexIcons;