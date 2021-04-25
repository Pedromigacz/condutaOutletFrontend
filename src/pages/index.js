import React from 'react'
import { IndexCaroulsel, IndexIcons } from '../Components'
import DefaultTemplate from '../templates/DefaultTemplate.jsx'
import '../styles/reset.css'

const Index = () => {
  return (
    <DefaultTemplate>
      <IndexCaroulsel />
      <IndexIcons />
    </DefaultTemplate>
  )
}
 
export default Index
