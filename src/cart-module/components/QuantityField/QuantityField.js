import React from 'react'
import PropTypes from 'prop-types'

import './QuantityField.css'

class QuantityField extends React.Component {
  render () {
    const { value, incrementAmount, decreaseAmount, onChange } = this.props
    return (
      <div className='quantity-field' data-testid='quantity-field'>
        <button
          className='quantity-field__btn-decrement'
          data-testid='decrease-button'
          onClick={decreaseAmount}>
          <div>-</div>
        </button>

        <input
          className='quantity-field__value'
          type='text'
          value={value}
          onChange={onChange} />

        <button
          className='quantity-field__btn-increment'
          data-testid='increment-button'
          onClick={incrementAmount}>
          <div>+</div>
        </button>
      </div>
    )
  }
}

QuantityField.propTypes = {
  value: PropTypes.number,
  incrementAmount: PropTypes.func,
  decreaseAmount: PropTypes.func,
  onChange: PropTypes.func
}

export default QuantityField
