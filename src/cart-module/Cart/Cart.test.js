import '@testing-library/jest-dom'
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Cart from './Cart'
import { incrementAmountOfItem } from '../model/CartActions'

let mockStore;
let store
let state

afterEach(cleanup)

beforeEach(() => {
  state = {
    cart: {
      items: [
        { 
          amount: 3,
          product: {
            id: 123,
            name: 'Test Name 1',
            picture: 'http://uri.com/mock/1',
            price: {
              from: {integers: "2.849", decimals: "90"},
              to: {integers: "1.849", decimals: "90"}
            }
          }
        },
        { 
          amount: 1,
          product: {
            id: 124,
            name: 'Test Name 2',
            picture: 'http://uri.com/mock/2',
            price: {
              from: {integers: "849", decimals: "90"},
              to: {integers: "649", decimals: "90"}
            }
          }
        }
      ],
      displayCart: false,
      freight: {
        cep: 48901180,
        value: 10
      }
    }
  }
  mockStore = configureStore({});
  store = mockStore(state)
  store.dispatch = jest.fn();
});

const calculateSubtotal = (items) => {
  if (items.length > 0) {
    return items.map(item => item.amount * parseFloat(`${item.product.price.to.integers.replace(/[^\d]+/g, '')}.${item.product.price.to.decimals}`))
      .reduce((acc, value) => acc + value)
  }
  return 0.00
}

describe('<Cart /> spec', () => {
  test('Snapshot test', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Cart />
      </Provider>
      )
    const cart = await waitForElement(() => getByTestId('cart'))
    expect(cart).toMatchSnapshot()
  })

  test('Should display cart state data', async () => {
    const { getByText, getByDisplayValue } = render(
      <Provider store={store}>
        <Cart />
      </Provider>
      )
    const freightValue = await waitForElement(() => getByText(`${state.cart.freight.value}`))
    expect(freightValue).toBeDefined()

    const cep = await waitForElement(() => getByDisplayValue(`${state.cart.freight.cep}`))
    expect(cep).toBeDefined()

    const subtotal = calculateSubtotal(state.cart.items)
    const cartSubtotal = await waitForElement(() => getByText(`R$ ${ Number(subtotal).toFixed(2) }`))
    expect(cartSubtotal).toBeDefined()
    
    const itemName = await waitForElement(() => getByText(`${state.cart.items[0].product.name}`))
    expect(itemName).toBeDefined()

    const itemCod = await waitForElement(() => getByText(`Cod. ${state.cart.items[0].product.id}`))
    expect(itemCod).toBeDefined()
  })
  
})
