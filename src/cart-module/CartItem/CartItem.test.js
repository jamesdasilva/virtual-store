import '@testing-library/jest-dom'
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react'
import React from 'react'
import CartItem from './CartItem'

afterEach(cleanup)

describe('<CartItem /> spec', () => {
  test('Should display name, code, image and prices', async () => {
    const handlerClickMock1 = jest.fn()
    const handlerClickMock2 = jest.fn()
    const objectMock = { 
      amount: 3,
      product: {
        id: 123,
        name: 'Test Name',
        picture: 'http://uri.com/mock',
        price: {
          from: {integers: "2.849", decimals: "90"},
          to: {integers: "1.849", decimals: "90"}
        }
      }
    }
    
    const { getByText } = render(
      <CartItem
        render={handlerClickMock1}
        item={objectMock}
        deleteItem={handlerClickMock2} />
      )

    const productName = await waitForElement(() => getByText(objectMock.product.name))
    expect(productName).toBeDefined()

    const productId = await waitForElement(() => getByText(`Cod. ${objectMock.product.id}`))
    expect(productId).toBeDefined()

    const productPriceFrom = await waitForElement(
      () => getByText(`${objectMock.product.price.from.integers},${objectMock.product.price.from.decimals}`))
    expect(productPriceFrom).toBeDefined()
    
    const productPriceTo = await waitForElement(
      () => getByText(`${objectMock.product.price.to.integers},${objectMock.product.price.to.decimals}`))
    expect(productPriceTo).toBeDefined()
  })

  test('Should call the render function', async () => {
    const handlerClickMock1 = jest.fn()
    const handlerClickMock2 = jest.fn()
    const objectMock = { 
      amount: 3,
      product: {
        id: 123,
        name: 'Test Name',
        picture: 'http://uri.com/mock',
        price: {
          from: {integers: "2.849", decimals: "90"},
          to: {integers: "1.849", decimals: "90"}
        }
      }
    }
    
    render(
      <CartItem
        render={handlerClickMock1}
        item={objectMock}
        deleteItem={handlerClickMock2} />
      )

    expect(handlerClickMock1).toBeCalled()
  })

  test('Should call deleteItem function when user clicks icon close', async () => {
    const handlerClickMock1 = jest.fn()
    const handlerClickMock2 = jest.fn()
    const objectMock = { 
      amount: 3,
      product: {
        id: 123,
        name: 'Test Name',
        picture: 'http://uri.com/mock',
        price: {
          from: {integers: "2.849", decimals: "90"},
          to: {integers: "1.849", decimals: "90"}
        }
      }
    }
    
    const { getByTestId } = render(
      <CartItem
        render={handlerClickMock1}
        item={objectMock}
        deleteItem={handlerClickMock2} />
      )

    const cartItemClose = await waitForElement(() => getByTestId('cart-item-close'))

    fireEvent.click(cartItemClose)

    expect(handlerClickMock2).toBeCalled()
  })

})
