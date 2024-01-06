import React from 'react'
import { WrapperBox } from './ProductsCSS'
import SingleProduct from './SingleProduct'
import {products} from '../../constants/constant'

const Products = () => {
  return (
    <>
      <WrapperBox>
        <SingleProduct data={products.watch}/>
        <SingleProduct data={products.ipad}/>
      </WrapperBox>
      <WrapperBox>
        <SingleProduct data={products.macbook}/>
        <SingleProduct data={products.homepod}/>
      </WrapperBox>
      <WrapperBox>
        <SingleProduct data={products.arcade}/>
        <SingleProduct data={products.applewatch}/>
      </WrapperBox>
    </>
  )
}

export default Products