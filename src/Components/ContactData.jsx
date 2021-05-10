import React from 'react';
import TimeIcon from '../vectors/TimeIcon.inline.svg'
import Email from '../vectors/Email.inline.svg'
import WhatsappIcon from '../vectors/WhatsappIcon.inline.svg'
import * as styles from '../styles/Footer.module.css'

const ContactData = () => (
    <span className={styles.footerCard}>
        <h3 className={styles.footerCardTitle}>Contato</h3>
        <br/>
        <p className={styles.footerCardText}>Este canal de atendimento destina-se somente para compras realizadas neste site.</p>
        <div>
            <TimeIcon className={styles.footerSvg} />
            <h4 className={styles.footerCardSecondaryTitle + ' ' + styles.marginBottom}>Horário de atendimento:</h4>
            <p className={styles.footerCardText + ' ' + styles.marginLeft}>Segunda à sexta: 9:00 -- 17:00</p>
        </div>
        <div className={styles.marginBottom}>
            <Email className={styles.footerSvg} />
            <p className={styles.footerCardSecondaryTitle}>condutaoutlet@gmail.com</p>
        </div>
        <div className={styles.marginBottom}>
            <WhatsappIcon className={styles.footerSvg} />
            <p className={styles.footerCardSecondaryTitle}>&#40;42&#41; 988355551</p>
        </div>
        <div className={styles.marginBottom}>
            <WhatsappIcon className={styles.footerSvg} />
            <p className={styles.footerCardSecondaryTitle}>&#40;11&#41; 957334164</p>
        </div>
    </span>
)

 
export default ContactData;