import React from 'react'
import PropTypes from 'prop-types'

import './FreightCalcInput.css'

class FreightCalcInput extends React.Component {
  render () {
    const { value, onChange } = this.props
    return (
      <div className='cart__freight-calc'>
        <input type='text'
          placeholder='Calcular CEP'
          value={value}
          onChange={onChange} />
      </div>
    )
  }
}

FreightCalcInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func
}

export default FreightCalcInput
