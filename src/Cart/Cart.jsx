import React from 'react'

const Cart = ({cartItems}) => {
  return (
    <div>
      {cartItems.map((cartItem) =>(
        <h1>{cartItem}</h1>
      ))}
    </div>
  )
}

export default Cart
