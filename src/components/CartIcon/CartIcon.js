import React from 'react'
import './CartIcon.css'
import blackCart from '../../images/cart.svg'
import whiteCart from '../../images/cart-white.svg'

const CartIcon = () => {
  return (
    <div className='cart-icon' onClick={() => console.log('clique em CartIcon')}>
      <div className='cart-icon__count'>0</div>
      <img className='cart-icon__black-cart' src={blackCart} width={34} height={34} />
      <img className='cart-icon__white-cart' src={whiteCart} width={34} height={34} />
    </div>
  )
}

export default CartIcon
