import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './CartIcon.css'

import blackCart from '../../images/cart.svg'
import whiteCart from '../../images/cart-white.svg'

import { toggleCart } from '../../modules/cart-module'

const totalItems = (items) => {
  if (items.length > 0) {
    return items.map(item => item.amount)
      .reduce((acc, value) => acc + value)
  }
  return 0
}

const CartIcon = (props) => {
  return (
    <div className='cart-icon' onClick={props.toggleCart}>
      <div className='cart-icon__count'>{totalItems(props.cart.items)}</div>
      <img className='cart-icon__black-cart' src={blackCart} width={34} height={34} />
      <img className='cart-icon__white-cart' src={whiteCart} width={34} height={34} />
    </div>
  )
}

CartIcon.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
