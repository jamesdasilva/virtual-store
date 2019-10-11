import axios from 'axios'

const RELOAD_PRODUCTS = 'leroy-merlin/products/RELOAD_PRODUCTS'
// const INSERT_PRODUCT_IN_CART = 'leroy-merlin/products/INSERT_PRODUCT_IN_CART'
// const DELETE_PRODUCT_CART = 'leroy-merlin/products/DELETE_PRODUCT_CART'
// const INCREMENT_PRODUCT_QUANTITY = 'leroy-merlin/products/INCREMENT_PRODUCT_QUANTITY'
// const DECREMENT_PRODUCT_QUANTITY = 'leroy-merlin/products/DECREMENT_PRODUCT_QUANTITY'

const initialState = []

export default function (state = initialState, action) {
  switch (action.type) {
    case RELOAD_PRODUCTS:
      return action.payload
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

export const getProducts = () => {
  return (dispatch) => {
    const url = 'https://us-central1-boitata-233919.cloudfunctions.net/api/products'
    axios({
      method: 'get',
      url: url,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      dispatch(reloadProducts(response.data))
    }).catch(() => {
      console.log('deu erro!')
    })
  }
}
