import React, { useState } from 'react'

const ObjectState = () => {
    const [product,setProduct]=useState({
name: 'product',
price:30,
stock:20
    })
    const handleProduct=()=>{
        setProduct({...product,
            stock:product.stock+1})
    }
  return (
    <div>
      <h1>{product.name}</h1>
      <h1>{product.price}</h1>
      <h1>{product.stock}</h1>
     
      <button className='bg-red-500 text-white px-5 py-2 ' onClick={()=>handleProduct()}>Set Stock  </button>
    </div>
  )
}

export default ObjectState
