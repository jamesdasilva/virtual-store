import React from 'react'
import PageLayout from './_pages/PageLayout/PageLayout'

import Header from './_pages/Header/Header'
import ProductCatalog from './products-module/components/ProductCatalog/ProductCatalog'
import Cart from './cart-module/components/Cart/Cart'
import CartIcon from './cart-module/components/CartIcon/CartIcon'

const renderHeader = () => {
  return <Header CartIcon={CartIcon} />
}

const App = () => (
  <PageLayout
    Header={renderHeader}
    ProductCatalog={ProductCatalog}
    Cart={Cart} />
)

export default App
