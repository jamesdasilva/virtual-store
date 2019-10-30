import axios from 'axios'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'
import * as types from './CartTypes'
import { setFreight } from './CartActions'

jest.mock('axios')
let mockStore
const middlewares = [thunkMiddleware]
beforeEach(() => {
  mockStore = configureStore(middlewares)
})

describe('setFreight', () => {
  test('Should dispatch the SET_FREIGHT action', () => {
    const requestReturn = {
      data: {
        freight: "10.00"
      }
    }
    axios.get.mockImplementation(() => Promise.resolve(requestReturn))
    const store = mockStore({ })
    const cep = '48901180'
    const freight = '10.00'
    const expectedActions = [{
      type: types.SET_FREIGHT,
      payload: {
        cep,
        freight
      }
    }]
    return store.dispatch(setFreight(cep)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
