import '@testing-library/jest-dom'
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CartIcon from './CartIcon'
import { toggleCart } from '../cart-module'

let mockStore;

afterEach(cleanup)

beforeEach(() => {
  mockStore = configureStore([]);
});

describe('<CartIcon /> spec', () => {
  test('Snapshot test', async () => {
    const store = mockStore({
      cart: {
        items: []
      }
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <CartIcon />
      </Provider>
    )
    const cartIcon = await waitForElement(() => getByTestId('cart-icon'))
    expect(cartIcon).toMatchSnapshot()
  })
  
  test('Should display number 0 if cart is empty', async () => {
    const store = mockStore({
      cart: {
        items: []
      }
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <CartIcon />
      </Provider>
    )
    const cartIconCount = await waitForElement(() => getByTestId('cart-icon-count'))
    expect(cartIconCount).toHaveTextContent('0')
  })

  test('Should display number 3 if cart has 3 items', async () => {
    const store = mockStore({
      cart: {
        items: [
          {amount: 1, product: {}},
          {amount: 2, product: {}}
        ]
      }
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <CartIcon />
      </Provider>
    )
    const cartIconCount = await waitForElement(() => getByTestId('cart-icon-count'))
    expect(cartIconCount).toHaveTextContent('3')
  })

  test('Should call toggleCart function when clicked', async () => {
    const store = mockStore({
      cart: {
        items: [ ]
      }
    });
    store.dispatch = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        <CartIcon />
      </Provider>
    )
    const cartIcon = await waitForElement(() => getByTestId('cart-icon'))
    fireEvent.click(cartIcon)
    expect(store.dispatch).toBeCalledWith(toggleCart())
  })

})
