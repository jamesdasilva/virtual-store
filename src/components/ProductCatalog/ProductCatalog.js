import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CatalogProduct from '../CatalogProduct/CatalogProduct'
import './ProductCatalog.css'

import { getProducts } from '../../module/products-module'

class ProductCatalog extends Component {
  componentDidMount () {
    this.props.getProducts()
  }

  render () {
    return (
      <div className='prod-catalog'>
        {
          this.props.productList &&
          this.props.productList.map(product => (
            <div className='prod-catalog__item' key={product.id}>
              <CatalogProduct dataProduct={product} />
            </div>
          ))
        }
      </div>
    )
  }
}

ProductCatalog.propTypes = {
  getProducts: PropTypes.func,
  productList: PropTypes.array
}

function mapStateToProps (state) {
  return {
    productList: state.productList
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getProducts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatalog)
