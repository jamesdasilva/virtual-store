import React from 'react'
import './PageLayout.css'
import Header from '../Header/Header'
import ProductList from '../ProductCatalog/ProductCatalog'

const PageLayout = () => {
  return (
    <div className='page-layout'>
      <div className='page-layout__header'><Header /></div>
      <div className='page-layout __body'><ProductList /></div>
    </div>
  )
}

export default PageLayout
