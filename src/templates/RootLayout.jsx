import React from 'react';
import { Navbar, Footer } from '../Components'
import CartContextProvider from '../contexts/CartContext.jsx'
import ContactContextProvider from '../contexts/ContactContext.jsx'

const RootLayout = ({children}) => {
    return (
        <CartContextProvider>
            <ContactContextProvider>
                <Navbar />
                {children}
                <Footer />
            </ContactContextProvider>
        </CartContextProvider>
    );
}
 
export default RootLayout;