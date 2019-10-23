import '@testing-library/jest-dom'
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react'
import React from 'react'
import AddToCartButton from './AddToCartButton'

afterEach(cleanup)

describe('<AddToCartButton /> spec', () => {
  test('Snapshot test', async () => {
    const addItemToCartSpy = jest.fn()
    const objectMock = { test: "test" }
    const { getByTestId } = render(
      <AddToCartButton
        addItemToCart={addItemToCartSpy}
        item={objectMock} />
      )
    const addToCartButton = await waitForElement(() => getByTestId('add-to-cart-button'))
    expect(addToCartButton).toMatchSnapshot()
  })
  
  test('Should call clickHandler function, passing the item parameter, when clicked', async () => {
    const addItemToCartSpy = jest.fn()
    const objectMock = { test: "test" }
    const { getByTestId } = render(
      <AddToCartButton
        addItemToCart={addItemToCartSpy}
        item={objectMock} />
      )
    const addToCartButton = await waitForElement(() => getByTestId('add-to-cart-button'))
    fireEvent.click(addToCartButton)
    expect(addItemToCartSpy).toBeCalledWith(objectMock)
  })
})
