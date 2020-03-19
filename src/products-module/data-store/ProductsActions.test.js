import axios from 'axios'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'
import * as types from './ProductsTypes'
import * as actions from './ProductsActions'

jest.mock('axios')
let mockStore
const middlewares = [thunkMiddleware]
beforeEach(() => {
  mockStore = configureStore(middlewares)
})

describe('Products Actions Creators', () => {
  describe('getProducts', () => {
    test(`Should dispatch the actions RELOAD_PRODUCTS=[productslist] 
      and ERROR_REQUEST=false 
      when successful request`, () => {
      const requestReturn = {
        data: [
          { teste: 'teste1' },
          { teste: 'teste2' }
        ]
      }
      axios.get.mockImplementation(() => Promise.resolve(requestReturn))
      const store = mockStore({ })
      const expectedActions = [{
        type: types.SET_IS_FETCHING
      }, {
        type: types.RELOAD_PRODUCTS,
        payload: [
          { teste: 'teste1' },
          { teste: 'teste2' }
        ]
      }, {
        type: types.CLEAR_IS_FETCHING
      }, {
        type: types.ERROR_REQUEST,
        payload: false
      }]
      return store.dispatch(actions.setProducts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

  test(`Should dispatch the actions RELOAD_PRODUCTS=[productslist] 
      and ERROR_REQUEST=false 
      when successful request`, () => {
      axios.get.mockImplementation(() => Promise.reject())
      const store = mockStore({ })
      const expectedActions = [{
        type: types.SET_IS_FETCHING
      }, {
        type: types.RELOAD_PRODUCTS,
        payload: [ ]
      }, {
        type: types.CLEAR_IS_FETCHING
      }, {
        type: types.ERROR_REQUEST,
        payload: true
      }]
      return store.dispatch(actions.setProducts()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
