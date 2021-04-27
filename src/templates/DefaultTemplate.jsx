import React from 'react';
import { Navbar, Footer } from '../Components'

const DefaultTemplate = ({children}) => {
    return (
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    );
}
 
export default DefaultTemplate;