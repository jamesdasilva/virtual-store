import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './CartIcon.css'

import blackCart from '../../images/cart.svg'
import whiteCart from '../../images/cart-white.svg'

import { toggleCart } from '../../modules/cart-module'

const CartIcon = (props) => {
  return (
    <div className='cart-icon' onClick={props.toggleCart}>
      <div className='cart-icon__count'>{props.cart.items.length}</div>
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
