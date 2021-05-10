import React, { createContext, useState } from 'react';
import { ContactModal } from '../Components'

export const ContactContext = createContext()

const ContactContextProvider = props => {
    const [contactModal, setContactModal] = useState(true)

    const openContactModal = () => {setContactModal(true)}
    const closeContactModal = () => {setContactModal(false)}

    return (
        <ContactContext.Provider value={{ openContactModal }}>
            <ContactModal contactModal={contactModal} closeContactModal={closeContactModal}/>
            {props.children}
        </ContactContext.Provider>
    );
}

export default ContactContextProvider;