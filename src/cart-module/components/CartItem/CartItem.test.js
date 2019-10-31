import '@testing-library/jest-dom'
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react'
import React from 'react'
import CartItem from './CartItem'

let renderQuantityFieldSpy
let deleteItemSpy
let itemMock

afterEach(cleanup)

beforeEach(() => {
  renderQuantityFieldSpy = jest.fn()
  deleteItemSpy = jest.fn()
  itemMock = { 
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
})

describe('<CartItem /> spec', () => {
  test('Snapshot test', async () => {
    const { getByTestId } = render(
      <CartItem
        renderQuantityField={renderQuantityFieldSpy}
        item={itemMock}
        deleteItem={deleteItemSpy} />
      )
    const cartItem = await waitForElement(() => getByTestId('cart-item'))
    expect(cartItem).toMatchSnapshot()
  })

  test('Should display name, code, image and prices', async () => {    
    const { getByText } = render(
      <CartItem
        renderQuantityField={renderQuantityFieldSpy}
        item={itemMock}
        deleteItem={deleteItemSpy} />
      )

    const productName = await waitForElement(() => getByText(itemMock.product.name))
    expect(productName).toBeDefined()

    const productId = await waitForElement(() => getByText(`Cod. ${itemMock.product.id}`))
    expect(productId).toBeDefined()

    const productPriceFrom = await waitForElement(
      () => getByText(`${itemMock.product.price.from.integers},${itemMock.product.price.from.decimals}`))
    expect(productPriceFrom).toBeDefined()
    
    const productPriceTo = await waitForElement(
      () => getByText(`${itemMock.product.price.to.integers},${itemMock.product.price.to.decimals}`))
    expect(productPriceTo).toBeDefined()
  })

  test('Should call the render function', async () => {
    render(
      <CartItem
        renderQuantityField={renderQuantityFieldSpy}
        item={itemMock}
        deleteItem={deleteItemSpy} />
      )
    expect(renderQuantityFieldSpy).toBeCalled()
  })

  test('Should call deleteItem function when user clicks icon close', async () => {
    const { getByTestId } = render(
      <CartItem
        renderQuantityField={renderQuantityFieldSpy}
        item={itemMock}
        deleteItem={deleteItemSpy} />
      )
    const cartItemClose = await waitForElement(() => getByTestId('cart-item-close'))
    fireEvent.click(cartItemClose)
    expect(deleteItemSpy).toBeCalled()
  })

})
