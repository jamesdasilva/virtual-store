import * as types from './ProductsTypes'

const initialState = {
  products: [],
  isFetching: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.RELOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
    case types.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: true
      }
    case types.CLEAR_IS_FETCHING:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
