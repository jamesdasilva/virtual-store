import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CatalogProduct from '../CatalogProduct/CatalogProduct'
import './ProductCatalog.css'

import { getProducts } from '../../module/products-module'

class ProductCatalog extends Component {
  console.log('teste', props)
  props.getProducts()
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
      <div className='prod-catalog__item'>
        <CatalogProduct />
      </div>
      <div className='prod-catalog__item'>
        <CatalogProduct />
      </div>
    </div>
  )
}

ProductCatalog.propTypes = {
  getProducts: PropTypes.func
}

function mapStateToProps (state) {
  return {
    products: state.products
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatalog)
