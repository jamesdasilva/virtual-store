import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import ReactDOM from 'react-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import './_styles/main.css'
import App from './App'

import Products from './products-module/products-module'
import Cart from './cart-module/model/CartReducer'

const reducers = combineReducers({
  productList: Products,
  cart: Cart
})

ReactDOM.render(
  <Provider store={applyMiddleware(thunkMiddleware)(createStore)(reducers, composeWithDevTools())}>
    <App />
  </Provider>, document.querySelector('#root')
)
