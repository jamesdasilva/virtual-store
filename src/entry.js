import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import ReactDOM from 'react-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import './styles/main.css'
import App from './App'

import Products from './modules/products-module'
import Cart from './modules/cart-module'

const reducers = combineReducers({
  productList: Products,
  cart: Cart
})

ReactDOM.render(
  <Provider store={applyMiddleware(thunkMiddleware)(createStore)(reducers, composeWithDevTools())}>
    <App />
  </Provider>, document.querySelector('#root')
)
