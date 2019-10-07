import React from 'react'
import './QuantityField.css'

class QuantityField extends React.Component {
  render () {
    return (
      <div className='quantity-field'>
        <button className='quantity-field__btn-decrement'><div>-</div></button>
        <input className='quantity-field__value' type='text' />
        <button className='quantity-field__btn-increment'><div>+</div></button>
      </div>
    )
  }
}

export default QuantityField
