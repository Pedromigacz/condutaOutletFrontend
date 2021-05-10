import React from 'react';
import * as styles from '../styles/ContactModal.module.css'
import SideCartCloseIcon from '../vectors/SideCartCloseIcon.inline.svg'
import { ContactData } from './'

const ContactModal = ({ contactModal, closeContactModal }) => {
    return (
        <div>
            {contactModal && 
            <div className={styles.contactBackdrop}>
                <div className={styles.contactModal}>
                    <button
                        aria-label="Fechar modal de contato"
                        className={styles.closeCartButton}
                        onClick={closeContactModal}
                        ><SideCartCloseIcon /></button>
                    <ContactData />
                </div>
            </div>
            }
        </div>
    )
}
 
export default ContactModal;