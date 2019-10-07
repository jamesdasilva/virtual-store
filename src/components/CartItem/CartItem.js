import React from 'react'
import './CartItem.css'
import QuantityField from '../QuantityField/QuantityField'

class CartItem extends React.Component {
  render () {
    return (
      <div className='cart-item'>
        <div className='cart-item__thumb'>
          <img src='https://cdn.leroymerlin.com.br/products/furadeira_parafusadeira_de_impacto_3_8_a_bateria_de_12_volts_1566684694_4ea1_300x300.jpg' />
        </div>
        <div className='cart-item__info'>
          <h3 className='cart-item__name'>Fogão Brastemp 4 bocas embutir cor Inox com dupla chama e grill 110V</h3>
          <div className='cart-item__content'>
            <div className='cart-item__info-left'>
              <div className='cart-item__code'>Cod. 9999999</div>
              <QuantityField />
            </div>
            <div className='cart-item__info-right'>
              <div className='cart-item__from-price'>1 un. 999,00</div>
              <div className='cart-item__to-price'>1 un. 777,00</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem
