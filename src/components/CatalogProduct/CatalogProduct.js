import React from 'react'
import './CatalogProduct.css'

const CatalogProduct = () => {
  return (
    <div className='cat-product'>
      <div className='cat-product__thumb-content'>
        <div className='cat-product__tag'>Exclusivo on-line</div>
        <img src='https://cdn.leroymerlin.com.br/products/furadeira_parafusadeira_de_impacto_3_8_a_bateria_de_12_volts_1566684694_4ea1_300x300.jpg' />
        <div className='cat-product__offer'>Oferta</div>
      </div>
      <div className='cat-product__name'>Furadeira de Impacto 1/2&quot 650W PC650ID 127V (110V) Dexter IV</div>
      <div className='cat-product__price'>
        <div className='cat-product__to-price'>
          <span className='cat-product__to-price-value'>R$ 469,00</span>
          <span className='cat-product__to-price-unit'>cada</span>
        </div>
        <div className='cat-product__from-price'>R$ 569,00 cada</div>
      </div>
    </div>
  )
}

export default CatalogProduct
