import React from 'react'
import './AddToCartButton.css'

const AddToCartButton = () => {
  return (
    <button className='add-to-cart-button' onClick={() => console.log('clique em CartIcon')}>
      Adicionar ao carrinho
    </button>
  )
}

export default AddToCartButton
