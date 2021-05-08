import React from 'react';
import RootLayout from './src/templates/RootLayout'

export const wrapRootElement = ({ element }) => <RootLayout>{element}</RootLayout>;