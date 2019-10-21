import '@testing-library/jest-dom'
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react'
import React from 'react'
import AddToCartButton from './AddToCartButton'

afterEach(cleanup)

describe('<AddToCartButton /> spec', () => {
  test('Should fire the clickHandler function, passing the product parameter, when clicked', async () => {
    const handlerClickMock = jest.fn()
    const objectMock = { test: "test"}
    
    const { getByTestId } = render(
      <AddToCartButton
        clickHandler={handlerClickMock}
        product={objectMock} />
      )

    const addToCartButton = await waitForElement(() => getByTestId('add-to-cart-button'))

    fireEvent.click(addToCartButton)

    expect(handlerClickMock).toBeCalledWith(objectMock)
  })

})
