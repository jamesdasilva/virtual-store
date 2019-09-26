import React from 'react'
import CatalogProduct from '../CatalogProduct/CatalogProduct'
import './ProductCatalog.css'

const ProductCatalog = () => {
  return (
    <div className='prod-catalog'>
      <div className='prod-catalog__item'>
        <CatalogProduct />
      </div>
      <div className='prod-catalog__item'>
        <CatalogProduct />
      </div>
      <div className='prod-catalog__item'>
        <CatalogProduct />
      </div>
      <div className='prod-catalog__item'>
        <CatalogProduct />
      </div>
      <div className='prod-catalog__item'>
        <CatalogProduct />
      </div>
      <div className='prod-catalog__item'>
        <CatalogProduct />
      </div>
    </div>
  )
}

export default ProductCatalog
