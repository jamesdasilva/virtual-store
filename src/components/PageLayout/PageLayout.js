import React from 'react'
import './PageLayout.css'
import Header from '../Header/Header'
import ProductList from '../ProductCatalog/ProductCatalog'
import FeedbackMessage from '../FeedbackMessage/FeedbackMessage'

const PageLayout = () => {
  return (
    <div className='page-layout'>
      <div className='page-layout__header'><Header /></div>
      <div className='page-layout__body'><ProductList /><FeedbackMessage /></div>
    </div>
  )
}

export default PageLayout
