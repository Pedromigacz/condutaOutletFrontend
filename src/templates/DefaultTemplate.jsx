import React from 'react';
import { Navbar } from '../Components'

const DefaultTemplate = ({children}) => {
    return (
        <>
        <Navbar />
        {children}
        </>
    );
}
 
export default DefaultTemplate;