import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './Cart.css'

import CartItem from '../CartItem/CartItem'

import { toggleCart } from '../../modules/cart-module'

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.calculateSubtotal = this.calculateSubtotal.bind(this)
    this.extractProductList = this.extractProductList.bind(this)
  }

  calculateSubtotal () {
    const { items } = this.props.cart
    if (items.length > 0) {
      return items.map(item => parseFloat(`${item.price.to.integers.replace(/[^\d]+/g, '')}.${item.price.to.decimals}`))
        .reduce((acc, value) => acc + value)
    }
    return 0.00
  }

  extractProductList () {
    const { items } = this.props.cart
    return items.filter((value, index, self) => self.indexOf(value) === index)
      .map(element => {
        return {
          ...element,
          amount: items.filter(item => item.id === element.id).length
        }
      })
  }

  render () {
    const { toggleCart, cart } = this.props
    const cartItems = this.extractProductList()
    console.log(cartItems)
    const subtotal = this.calculateSubtotal()
    return (
      <div className={`cart${cart.displayCart ? '--show' : ''}`}>
        <div className='cart__title'>
          <span className='cart__close-icon' onClick={toggleCart}>+</span>
          <h3>Meus Produtos</h3>
        </div>
        <div className='cart__freight-calc'>
          <input type='text' placeholder='Calcular CEP' />
        </div>
        <div className='cart__content'>
          {
            cartItems &&
            cartItems.map(product => (
              <CartItem key={product.id} item={product} />
            ))
          }
        </div>
        <div className='cart__freight-display'>
          <span>Frete:</span>
          <span>R$ 999,00</span>
        </div>
        <div className='cart__subtotal'>
          <span>Subtotal:</span>
          <span>R$ { Number(subtotal).toFixed(2) }</span>
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

Cart.propTypes = {
  toggleCart: PropTypes.func,
  cart: PropTypes.object
}

function mapStateToProps (state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ toggleCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
