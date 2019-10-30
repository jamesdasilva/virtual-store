import React from 'react'
import PageLayout from './_pages/PageLayout/PageLayout'

import Header from './_pages/Header/Header'
import ProductCatalog from './products-module/components/ProductCatalog/ProductCatalog'
import FeedbackMessage from './cart-module/FeedbackMessage/FeedbackMessage'
import Cart from './cart-module/Cart/Cart'
import CartIcon from './cart-module/CartIcon/CartIcon'

const renderHeader = () => {
  return <Header CartIcon={CartIcon} />
}

const App = () => (
  <PageLayout
    Header={renderHeader}
    ProductCatalog={ProductCatalog}
    FeedbackMessage={FeedbackMessage}
    Cart={Cart} />
)

export default App
