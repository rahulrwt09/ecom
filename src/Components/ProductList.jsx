import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getproduct } from '../Redux/ProductReducer/action'
import ProductCard from './ProductCard'
import './display.css'

const ProductList = () => {
  const dispatch = useDispatch()
   const products = useSelector((store)=>
   {
    return store.productReducer.products
  })
  
   useEffect(()=>{
      dispatch(getproduct)
   },[]) 
  return (
    <div className='container'>
    <div className='grid-container '> 
      {products.length>0 && products.map((el)=>{
        return <ProductCard key={el.id} product={el}/>
      })

      
      }  
    </div>
    </div>
  )
}

export default ProductList
