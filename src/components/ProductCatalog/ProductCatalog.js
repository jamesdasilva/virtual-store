import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './ProductCatalog.css'

import AddToCartButton from '../AddToCartButton/AddToCartButton'
import CatalogProduct from '../CatalogProduct/CatalogProduct'

import { getProducts } from '../../modules/products-module'
import { insertProductInCart } from '../../modules/cart-module'

class ProductCatalog extends Component {
  constructor (props) {
    super(props)
    this.colocarNoCarrinho = this.colocarNoCarrinho.bind(this)
  }

  componentDidMount () {
    this.props.getProducts()
  }

  colocarNoCarrinho (product) {
    this.props.insertProductInCart(product)
  }

  render () {
    return (
      <div className='prod-catalog'>
        {
          this.props.productList &&
          this.props.productList.map(product => (
            <div className='prod-catalog__item' key={product.id}>
              <CatalogProduct
                dataProduct={product}
                actionButtonRender={() => <AddToCartButton
                  clickHandler={this.colocarNoCarrinho}
                  product={product} />} />
            </div>
          ))
        }
      </div>
    )
  }
}

ProductCatalog.propTypes = {
  getProducts: PropTypes.func,
  insertProductInCart: PropTypes.func,
  productList: PropTypes.array
}

function mapStateToProps (state) {
  return {
    productList: state.productList,
    cart: state.cart
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getProducts, insertProductInCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatalog)
