import React from 'react'
import PropTypes from 'prop-types'

import './CartItem.css'

import QuantityField from '../QuantityField/QuantityField'

class CartItem extends React.Component {
  render () {
    const { item } = this.props
    return (
      <div className='cart-item'>
        <div className='cart-item__thumb'>
          <img src={item.picture} />
        </div>
        <div className='cart-item__info'>
          <h3 className='cart-item__name'>{item.name}</h3>
          <div className='cart-item__content'>
            <div className='cart-item__info-left'>
              <div className='cart-item__code'>Cod. {item.id}</div>
              <QuantityField value={item.amount} />
            </div>
            <div className='cart-item__info-right'>
              <div className='cart-item__from-price'>{item.price.from ? `${item.price.from.integers},${item.price.from.decimals}` : '--'}</div>
              <div className='cart-item__to-price'>{`${item.price.to.integers},${item.price.to.decimals}`}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CartItem.propTypes = {
  item: PropTypes.object
}

export default CartItem
