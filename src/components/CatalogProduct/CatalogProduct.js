import React from 'react'
import PropTypes from 'prop-types'
import './CatalogProduct.css'
import AddToCartButton from '../AddToCartButton/AddToCartButton'

const CatalogProduct = (props) => {
  const { dataProduct } = props
  return (
    <div className='cat-product'>
      <div className='cat-product__thumb-content'>
        <img src={dataProduct.picture} />
        {dataProduct.tag &&
          (<div className='cat-product__tag'>
            {dataProduct.tag.label}
          </div>)}
        {dataProduct.offer &&
          (<div className='cat-product__offer'>
            <div className='cat-product__offer-title'>
              {dataProduct.offer.label}
            </div>
            <div className='cat-product__offer-value'>
              {dataProduct.offer.value}%
            </div>
          </div>)}
      </div>
      <div className='cat-product__name'>{dataProduct.name}</div>
      <AddToCartButton />
      <div className={`cat-product__price${dataProduct.offer ? '--with-offer' : ''}`}>
        <div className='cat-product__to-price'>
          {dataProduct.price.to &&
            (<span className={`cat-product__to-price-value${dataProduct.offer ? '--with-offer' : ''}`}>
              {`R$ ${dataProduct.price.to.integers},${dataProduct.price.to.decimals}`}
            </span>)}
          <span className={`cat-product__to-price-unit${dataProduct.offer ? '--with-offer' : ''}`}>{dataProduct.unit}</span>
        </div>
        <div className='cat-product__installments-content'>
          {dataProduct.price.from &&
            (<div className='cat-product__from-price'>
              {`R$ ${dataProduct.price.from.integers},${dataProduct.price.from.decimals} ${dataProduct.unit}`}
            </div>)}
          {dataProduct.installments &&
            (<div className='cat-product__installments'>
              <strong>{dataProduct.installments.amount}X</strong> de <strong>R$ {dataProduct.installments.amount}</strong> s/juros
            </div>)}
        </div>
      </div>
    </div>
  )
}

CatalogProduct.propTypes = {
  dataProduct: PropTypes.object
}

export default CatalogProduct
