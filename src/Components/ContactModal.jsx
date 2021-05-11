import React from 'react';
import * as styles from '../styles/ContactModal.module.css'
import SideCartCloseIcon from '../vectors/SideCartCloseIcon.inline.svg'
import { ContactData } from './'
import { motion, AnimatePresence } from 'framer-motion'

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
      x: 700,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    }
}

const ContactModal = ({ contactModal, closeContactModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {contactModal && 
            <motion.div
                className={styles.contactBackdrop}
                variants={backDropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <motion.div
                    className={styles.contactModal}
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <button
                        aria-label="Fechar modal de contato"
                        className={styles.closeCartButton}
                        onClick={closeContactModal}
                        ><SideCartCloseIcon /></button>
                    <ContactData />
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>
    )
}
 
export default ContactModal;