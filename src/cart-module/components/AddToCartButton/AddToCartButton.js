import React from 'react'
import PropTypes from 'prop-types'
import './AddToCartButton.css'

const AddToCartButton = ({ addItemToCart, item }) => {
  return (
    <button
      data-testid='add-to-cart-button'
      className='add-to-cart-button'
      onClick={() => addItemToCart(item)}
    >Adicionar ao carrinho</button>
  )
}

AddToCartButton.propTypes = {
  addItemToCart: PropTypes.func,
  item: PropTypes.object
}

export default AddToCartButton
