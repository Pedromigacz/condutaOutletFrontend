import React from 'react';
import { Navbar, Footer } from '../Components'
import CartoContextProvider from '../contexts/CartContext'

const DefaultTemplate = ({children}) => {
    return (
        <CartoContextProvider>
            <Navbar />
            {children}
            <Footer />
        </CartoContextProvider>
    );
}
 
export default DefaultTemplate;