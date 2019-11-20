import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.css'

const PageLayout = ({ Header, ProductCatalog, Cart }) => {
  return (
    <div className='page-layout'>
      <div className='page-layout__header'>
        {Header()}
      </div>
      <div className='page-layout__body'>
        <ProductCatalog />
        <Cart />
      </div>
    </div>
  )
}

PageLayout.propTypes = {
  Header: PropTypes.func,
  ProductCatalog: PropTypes.object,
  Cart: PropTypes.object
}

export default PageLayout
