import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './Cart.css'

import CartItem from '../CartItem/CartItem'
import QuantityField from '../QuantityField/QuantityField'

import {
  toggleCart,
  changeAmountOfItem,
  incrementAmountOfItem,
  decreaseAmountOfItem,
  deleteProductOfCart,
  getFreight,
  setCep
} from '../../modules/cart-module'

class Cart extends React.Component {
  constructor (props) {
    super(props)
    this.changeAmount = this.changeAmount.bind(this)
    this.renderQuantityField = this.renderQuantityField.bind(this)
    this.incrementAmount = this.incrementAmount.bind(this)
    this.decreaseAmount = this.decreaseAmount.bind(this)
    this.calculateSubtotal = this.calculateSubtotal.bind(this)
    this.extractProductList = this.extractProductList.bind(this)
    this.onChangeCep = this.onChangeCep.bind(this)
  }

  changeAmount (id) {
    return (e) => {
      this.props.changeAmountOfItem(e.target.value, id)
    }
  }

  renderQuantityField (value, id) {
    return (
      <QuantityField
        value={value}
        onChange={this.changeAmount(id)}
        incrementAmount={this.incrementAmount(id)}
        decreaseAmount={this.decreaseAmount(id)} />)
  }

  incrementAmount (id) {
    return () => {
      this.props.incrementAmountOfItem(id)
    }
  }

  decreaseAmount (id) {
    return () => {
      this.props.decreaseAmountOfItem(id)
    }
  }

  calculateSubtotal () {
    const { items } = this.props.cart
    if (items.length > 0) {
      return items.map(item => item.amount * parseFloat(`${item.product.price.to.integers.replace(/[^\d]+/g, '')}.${item.product.price.to.decimals}`))
        .reduce((acc, value) => acc + value)
    }
    return 0.00
  }

  extractProductList () {
    const { items } = this.props.cart
    return items
  }

  deleteItem (id) {
    return () => {
      this.props.deleteProductOfCart(id)
    }
  }

  onChangeCep (e) {
    this.props.setCep(e.target.value)
    if (e.target.value.length >= 8) {
      setTimeout(() => {
        this.props.getFreight(this.props.cart.freight.cep)
      }, 1000)
    }
  }

  render () {
    const { toggleCart, cart } = this.props
    const cartItems = this.extractProductList()
    const subtotal = this.calculateSubtotal()
    return (
      <div className={`cart${cart.displayCart ? '--show' : ''}`}>
        <div className='cart__title'>
          <span className='cart__close-icon' onClick={toggleCart}>+</span>
          <h3>Meus Produtos</h3>
        </div>
        <div className='cart__freight-calc'>
          <input type='text'
            placeholder='Calcular CEP'
            value={cart.freight.cep}
            onChange={this.onChangeCep} />
        </div>
        <div className='cart__content'>
          {
            cartItems &&
            cartItems.map(item => (
              <CartItem
                key={item.product.id}
                item={item}
                incrementAmount={this.incrementAmount}
                decreaseAmount={this.decreaseAmount}
                render={this.renderQuantityField}
                deleteItem={this.deleteItem(item.product.id)} />
            ))
          }
        </div>
        <div className='cart__freight-display'>
          <span>Frete:</span>
          <span>{ cart.freight.value || '--'}</span>
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
  changeAmountOfItem: PropTypes.func,
  incrementAmountOfItem: PropTypes.func,
  decreaseAmountOfItem: PropTypes.func,
  deleteProductOfCart: PropTypes.func,
  getFreight: PropTypes.func,
  setCep: PropTypes.func,
  cart: PropTypes.object
}

function mapStateToProps (state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    toggleCart,
    changeAmountOfItem,
    incrementAmountOfItem,
    decreaseAmountOfItem,
    deleteProductOfCart,
    getFreight,
    setCep
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
