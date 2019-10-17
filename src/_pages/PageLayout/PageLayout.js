import React from 'react'
import './PageLayout.css'

const PageLayout = ({ Header, ProductCatalog, FeedbackMessage, Cart }) => {
  return (
    <div className='page-layout'>
      <div className='page-layout__header'>
        {Header()}
      </div>
      <div className='page-layout__body'>
        <ProductCatalog />
        <FeedbackMessage />
        <Cart />
      </div>
    </div>
  )
}

export default PageLayout
