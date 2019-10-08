import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import ReactDOM from 'react-dom'
import './styles/main.css'
import App from './App'

import Products from './module/products-module'

const reducers = combineReducers({
  productList: Products
})

ReactDOM.render(
  <Provider store={applyMiddleware(thunkMiddleware)(createStore)(reducers)}>
    <App />
  </Provider>, document.querySelector('#root')
)
