import '@testing-library/jest-dom'
import { render, cleanup, waitForElement, fireEvent } from '@testing-library/react'
import React from 'react'
import QuantityField from './QuantityField'

let incrementAmountSpy
let decreaseAmountSpy
let onChangeSpy
let valueMock

afterEach(cleanup)

beforeEach(() => {
  incrementAmountSpy = jest.fn()
  decreaseAmountSpy = jest.fn()
  onChangeSpy = jest.fn()
  valueMock = 2
})

describe('<QuantityField /> spec', () => {
  test('Snapshot test', async () => {
    const { getByTestId } = render(
      <QuantityField
        value={valueMock}
        incrementAmount={incrementAmountSpy}
        decreaseAmount={decreaseAmountSpy}
        onChange={onChangeSpy} />
      )
    const quantityField = await waitForElement(() => getByTestId('quantity-field'))
    expect(quantityField).toMatchSnapshot()
  })

  test('Should display value', async () => {
    const { getByDisplayValue } = render(
      <QuantityField
        value={valueMock}
        incrementAmount={incrementAmountSpy}
        decreaseAmount={decreaseAmountSpy}
        onChange={onChangeSpy} />
      )
    const quantityFieldValue = await waitForElement(() => getByDisplayValue(`${valueMock}`))
    expect(quantityFieldValue).toBeDefined()
  })

  test('Should call onChange function when user change value', async () => {
    const { getByDisplayValue } = render(
      <QuantityField
        value={valueMock}
        incrementAmount={incrementAmountSpy}
        decreaseAmount={decreaseAmountSpy}
        onChange={onChangeSpy} />
      )
    const quantityFieldValue = await waitForElement(() => getByDisplayValue(`${valueMock}`))
    fireEvent.change(quantityFieldValue, {
      target: { value: valueMock + 1 }
    })
    expect(onChangeSpy).toBeCalled()
  })

  test('Should call the increment function when the user clicks the increment button', async () => {
    const { getByTestId } = render(
      <QuantityField
        value={valueMock}
        incrementAmount={incrementAmountSpy}
        decreaseAmount={decreaseAmountSpy}
        onChange={onChangeSpy} />
      )
    const incrementButton = await waitForElement(() => getByTestId('increment-button'))
    fireEvent.click(incrementButton)
    expect(incrementAmountSpy).toBeCalled()
  })

  test('Should call the decreaseAmount function when the user clicks the decrease button', async () => {
    const { getByTestId } = render(
      <QuantityField
        value={valueMock}
        incrementAmount={incrementAmountSpy}
        decreaseAmount={decreaseAmountSpy}
        onChange={onChangeSpy} />
      )
    const decreaseButton = await waitForElement(() => getByTestId('decrease-button'))
    fireEvent.click(decreaseButton)
    expect(decreaseAmountSpy).toBeCalled()
  })

})
