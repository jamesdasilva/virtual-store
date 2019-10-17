import axios from 'axios'

const RELOAD_PRODUCTS = 'leroy-merlin/products/RELOAD_PRODUCTS'
const SET_IS_FETCHING = 'leroy-merlin/products/SET_IS_FETCHING'
const CLEAR_IS_FETCHING = 'leroy-merlin/products/CLEAR_IS_FETCHING'

const initialState = {
  products: [],
  isFetching: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case RELOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case CLEAR_IS_FETCHING:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}

export const reloadProducts = (products) => {
  return {
    type: RELOAD_PRODUCTS,
    payload: products
  }
}

export const setIsFetching = () => {
  return {
    type: SET_IS_FETCHING
  }
}

export const clearIsFetching = () => {
  return {
    type: CLEAR_IS_FETCHING
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
    }).catch(() => {
      console.log('deu erro!')
    })
  }
}
