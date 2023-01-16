import React, { useState } from 'react'
import ProductContext from './ProductContext'
import { useNavigate } from 'react-router-dom'

const ProductState = (props) => {
    let navigate = useNavigate()
    let [ ProductId , SetProductId ] = useState('asjdkfkl')
    const ProductData = (id)=>{
        SetProductId(id)
        navigate('/ProductBuy')
    }
  return (
    <ProductContext.Provider value={{ProductData ,ProductId }}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState
