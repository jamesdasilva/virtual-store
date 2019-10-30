import axios from 'axios'
import * as types from './ProductsTypes'

export const reloadProducts = (products) => {
  return {
    type: types.RELOAD_PRODUCTS,
    payload: products
  }
}

export const setIsFetching = () => {
  return {
    type: types.SET_IS_FETCHING
  }
}

export const clearIsFetching = () => {
  return {
    type: types.CLEAR_IS_FETCHING
  }
}

export const getProducts = () => {
  return (dispatch) => {
    dispatch(setIsFetching())
    const url = 'https://us-central1-boitata-233919.cloudfunctions.net/api/products'
    axios({
      method: 'get',
      url: url,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      dispatch(reloadProducts(response.data))
      dispatch(clearIsFetching())
    })
  }
}
