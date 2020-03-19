import * as types from './ProductsTypes'
import productsReducer from './ProductsReducer'

describe('Products Reducer', () => {
  test(`Should be the product list in state when the action is RELOAD_PRODUCTS`, () => {
    const prevState = {
      products: [],
      requestError: undefined,
      isFetching: false
    }
    const action = {
      type: types.RELOAD_PRODUCTS,
      payload: [
        { teste: 'teste1' },
        { teste: 'teste2' }
      ]
    }
    expect(productsReducer(prevState, action)).toEqual({
      products: [
        { teste: 'teste1' },
        { teste: 'teste2' }
      ],
      requestError: undefined,
      isFetching: false
    })
  })

  test(`Should be the isFetching:true in state when the action is SET_IS_FETCHING`, () => {
    const prevState = {
      products: [],
      requestError: undefined,
      isFetching: false
    }
    const action = {
      type: types.SET_IS_FETCHING
    }
    expect(productsReducer(prevState, action)).toEqual({
      products: [],
      requestError: undefined,
      isFetching: true
    })
  })

  test(`Should be the isFetching:false in state when the action is CLEAR_IS_FETCHING`, () => {
    const prevState = {
      products: [],
      requestError: undefined,
      isFetching: true
    }
    const action = {
      type: types.CLEAR_IS_FETCHING
    }
    expect(productsReducer(prevState, action)).toEqual({
      products: [],
      requestError: undefined,
      isFetching: false
    })
  })

  test(`Should be the isFetching:payload in state when the action is ERROR_REQUEST`, () => {
    const prevState = {
      products: [],
      requestError: undefined,
      isFetching: true
    }
    const action = {
      type: types.ERROR_REQUEST,
      payload: true
    }
    expect(productsReducer(prevState, action)).toEqual({
      products: [],
      requestError: action.payload,
      isFetching: true
    })
  })

  test(`Should not change state when action is invalid`, () => {
    const prevState = {
      products: [],
      requestError: undefined,
      isFetching: true
    }
    const action = {
      type: 'NO_ACTION'
    }
    expect(productsReducer(prevState, action)).toEqual(prevState)
  })
})
