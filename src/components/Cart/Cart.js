import React from 'react'
import './Cart.css'

const Cart = () => {
  return (
    <div className='cart'>
      <div className='cart__title'>Meus Produtos</div>
      <div className='cart__freight-calc'></div>
      <div className='cart__content'></div>
      <div className='cart__freight-display'></div>
      <div className='cart__subtotal'></div>
      <div className='cart__buy-button'></div>
    </div>  
  )
}

export default Cart
