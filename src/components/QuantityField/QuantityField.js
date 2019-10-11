import React from 'react'
import PropTypes from 'prop-types'

import './QuantityField.css'

class QuantityField extends React.Component {
  render () {
    return (
      <div className='quantity-field'>
        <button className='quantity-field__btn-decrement'><div>-</div></button>
        <input className='quantity-field__value' type='text' value={this.props.value} />
        <button className='quantity-field__btn-increment'><div>+</div></button>
      </div>
    )
  }
}

QuantityField.propTypes = {
  value: PropTypes.number
}

export default QuantityField
