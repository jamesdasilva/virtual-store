import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './ProductCatalog.css'

import AddToCartButton from '../../cart-module/AddToCartButton/AddToCartButton'
import CatalogProduct from '../CatalogProduct/CatalogProduct'

import { getProducts } from '../products-module'
import { insertProductInCart } from '../../cart-module/cart-module'

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
          !this.props.isFetching
            ? this.props.productList &&
              this.props.productList.map(product => (
                <div className='prod-catalog__item' key={product.id}>
                  <CatalogProduct
                    dataProduct={product}
                    actionButtonRender={() => <AddToCartButton
                      clickHandler={this.colocarNoCarrinho}
                      product={product} />} />
                </div>
              )) : (<div className="prod-catalog__is-fetching"><div className="lds-circle"><div></div></div></div>)
        }
      </div>
    )
  }
}

ProductCatalog.propTypes = {
  getProducts: PropTypes.func,
  insertProductInCart: PropTypes.func,
  productList: PropTypes.array,
  isFetching: PropTypes.bool
}

function mapStateToProps (state) {
  return {
    productList: state.productList.products,
    isFetching: state.productList.isFetching,
    cart: state.cart
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ getProducts, insertProductInCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCatalog)
