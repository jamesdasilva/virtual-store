import React from 'react'
import PropTypes from 'prop-types'

import './CartItem.css'

class CartItem extends React.Component {
  render () {
    const { item, render, deleteItem } = this.props
    return (
      <div className='cart-item'>
        <div className='cart-item__thumb'>
          <div className='cart-item__close' onClick={deleteItem}><div>+</div></div>
          <img src={item.product.picture} />
        </div>
        <div className='cart-item__info'>
          <h3 className='cart-item__name'>{item.product.name}</h3>
          <div className='cart-item__content'>
            <div className='cart-item__info-left'>
              <div className='cart-item__code'>Cod. {item.product.id}</div>
              {render(item.amount, item.product.id)}
            </div>
            <div className='cart-item__info-right'>
              <div className='cart-item__from-price'>
                {item.product.price.from ? `${item.product.price.from.integers},${item.product.price.from.decimals}` : '--'}
              </div>
              <div className='cart-item__to-price'>
                {`${item.product.price.to.integers},${item.product.price.to.decimals}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CartItem.propTypes = {
  item: PropTypes.object,
  incrementAmount: PropTypes.func,
  decreaseAmount: PropTypes.func,
  render: PropTypes.func,
  deleteItem: PropTypes.func
}

export default CartItem
