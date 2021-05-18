import React, { useEffect, useState } from 'react';
import { Navbar, MobileNavbar, Footer } from '../Components'
import CartContextProvider from '../contexts/CartContext.jsx'
import ContactContextProvider from '../contexts/ContactContext.jsx'

const RootLayout = ({children}) => {
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        if(!(window.innerWidth >= 960)) return setMobile(true)
        if(window.innerWidth >= 960) return setMobile(false)
    }, [])

    return (
        <CartContextProvider>
            <ContactContextProvider>
                {mobile ? <MobileNavbar /> : <Navbar />}
                {children}
                <Footer />
            </ContactContextProvider>
        </CartContextProvider>
    );
}
 
export default RootLayout;