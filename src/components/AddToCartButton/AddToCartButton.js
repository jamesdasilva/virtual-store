import React from 'react'
import PropTypes from 'prop-types'
import './AddToCartButton.css'

const AddToCartButton = ({ clickHandler, product }) => {
  return (
    <button className='add-to-cart-button' onClick={() => clickHandler(product)}>
      Adicionar ao carrinho
    </button>
  )
}

AddToCartButton.propTypes = {
  clickHandler: PropTypes.func,
  product: PropTypes.object
}

export default AddToCartButton
