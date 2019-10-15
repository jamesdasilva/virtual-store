import axios from 'axios'

const RELOAD_PRODUCTS = 'leroy-merlin/products/RELOAD_PRODUCTS'

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
