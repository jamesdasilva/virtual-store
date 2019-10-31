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

export const setErrorRequest = (error) => {
  return {
    type: types.ERROR_REQUEST,
    payload: error
  }
}

export const setProducts = () => {
  return (dispatch) => {
    dispatch(setIsFetching())
    const url = 'https://us-central1-boitata-233919.cloudfunctions.net/api/products'
    return axios.get(url).then((response) => {
      dispatch({
        type: types.RELOAD_PRODUCTS,
        payload: response.data
      })
      dispatch(clearIsFetching())
      dispatch(setErrorRequest(false))
    }).catch(() => {
      dispatch({
        type: types.RELOAD_PRODUCTS,
        payload: [ ]
      })
      dispatch(clearIsFetching())
      dispatch(setErrorRequest(true))
    })
  }
}
