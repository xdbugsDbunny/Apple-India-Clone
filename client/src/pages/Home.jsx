import React from 'react'
import Header from '../components/Header/Header'
import Info from '../components/Info/Info'
import Section from '../components/Section/Section'
import Products from '../components/Products/Products'
import { productsSection } from '../constants/constant'

const Home = () => {
  return (
    <>
        <Header></Header>
        <Info></Info>
        <Section data={productsSection.iphonePro}></Section>
        <Section data={productsSection.iphone}></Section>
        <Section data={productsSection.macbookpro}></Section>
        <Products></Products>
    </>
  )
}

export default Home