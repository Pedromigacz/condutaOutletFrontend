import React from 'react'
import { IndexCaroulsel, IndexIcons } from '../Components'
import '../styles/reset.css'
import { SEO } from '../Components'

const Index = () => {
  return (
    <>
      <SEO url="https://www.condutaoutlet.com/"/>
      <IndexCaroulsel />
      <IndexIcons />
    </>
  )
}
 
export default Index
