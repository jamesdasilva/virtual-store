import React from 'react'
import './Cart.css'
import CartItem from '../CartItem/CartItem'

class Cart extends React.Component {
  render () {
    return (
      <div className='cart'>
        <div className='cart__title'>
          <span className='cart__close-icon'>+</span>
          <h3>Meus Produtos</h3>
        </div>
        <div className='cart__freight-calc'>
          <input type='text' placeholder='Calcular CEP' />
        </div>
        <div className='cart__content'>
          <CartItem />
          <CartItem />
        </div>
        <div className='cart__freight-display'>
          <span>Frete:</span>
          <span>R$ 999,00</span>
        </div>
        <div className='cart__subtotal'>
          <span>Subtotal:</span>
          <span>R$ 99999,00</span>
        </div>
        <div className='cart__buy-button'>
          <button>
            Comprar
          </button>
        </div>
      </div>
    )
  }
}

export default Cart
