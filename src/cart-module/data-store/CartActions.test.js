import axios from 'axios'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'
import * as types from './CartTypes'
import * as actions from './CartActions'

jest.mock('axios')
let mockStore
const middlewares = [thunkMiddleware]
beforeEach(() => {
  mockStore = configureStore(middlewares)
})

describe('Cart Actions Creators', () => {
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
      return store.dispatch(actions.setFreight(cep)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })

  describe('insertProductInCart', () => {
    test('Should create an action to add a product', () => {
      const productMock = {
        id: 1
      }
      const expectedAction = {
        type: types.INSERT_PRODUCT_IN_CART,
        payload: productMock
      }
      expect(actions.insertProductInCart(productMock)).toEqual(expectedAction)
    })
  })

  describe('changeAmountOfItem', () => {
    test('Should create an action to update the amount of an item', () => {
      const amountMock = 1
      const idMock = 1
      const expectedAction = {
        type: types.CHANGE_AMOUNT,
        payload: {
          newAmount: amountMock,
          id: idMock
        }
      }
      expect(actions.changeAmountOfItem(amountMock, idMock)).toEqual(expectedAction)
    })
  })

  describe('incrementAmountOfItem', () => {
    test('Should create an action to increment the amount of an item', () => {
      const idMock = 1
      const expectedAction = {
        type: types.INCREMENT_AMOUNT,
        payload: {
          id: idMock
        }
      }
      expect(actions.incrementAmountOfItem(idMock)).toEqual(expectedAction)
    })
  })

  describe('deleteProductOfCart', () => {
    test('Should create an action to delete an item', () => {
      const idMock = 1
      const expectedAction = {
        type: types.DELETE_PRODUCT_CART,
        payload: {
          id: idMock
        }
      }
      expect(actions.deleteProductOfCart(idMock)).toEqual(expectedAction)
    })
  })

  describe('showCart', () => {
    test('Should create an action to show cart', () => {
      const expectedAction = {
        type: types.SHOW_CART
      }
      expect(actions.showCart()).toEqual(expectedAction)
    })
  })

  describe('hiddenCart', () => {
    test('Should create an action to hidden cart', () => {
      const expectedAction = {
        type: types.HIDDEN_CART
      }
      expect(actions.hiddenCart()).toEqual(expectedAction)
    })
  })

  describe('toggleCart', () => {
    test('Should create an action to toggle cart', () => {
      const expectedAction = {
        type: types.TOGGLE_CART
      }
      expect(actions.toggleCart()).toEqual(expectedAction)
    })
  })

  describe('setCep', () => {
    test('Should create an action to set cep', () => {
      const cep = '48901180'
      const expectedAction = {
        type: types.SET_CEP,
        payload: {
          cep
        }
      }
      expect(actions.setCep(cep)).toEqual(expectedAction)
    })
  })
})
