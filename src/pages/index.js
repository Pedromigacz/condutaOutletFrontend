import React from 'react'
import { IndexCaroulsel, IndexIcons } from '../Components'
import '../styles/reset.css'
import { Seo } from '../Components'

const Index = () => {
  return (
    <>
      <Seo url="https://www.condutaoutlet.com/"/>
      <IndexCaroulsel />
      <IndexIcons />
    </>
  )
}
 
export default Index
