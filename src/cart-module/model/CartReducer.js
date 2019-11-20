import * as actions from './CartTypes'

const initialState = {
  items: [],
  displayCart: false,
  displayFeedbackMsg: true,
  freight: {
    cep: undefined,
    value: undefined
  }
}

const addNewItem = (product, state) => {
  const index = state.items.findIndex(item => item.product.id === product.id)
  if (index >= 0) {
    state.items[index].amount = state.items[index].amount + 1
    return [...state.items]
  }
  return [...state.items, { amount: 1, product: product }]
}

const changeAmount = (newAmount, id, state) => {
  const index = state.items.findIndex(item => item.product.id === id)
  if (index >= 0) {
    state.items[index].amount = parseInt(newAmount) || 0
  }
  return [...state.items]
}

const incrementAmount = (id, state) => {
  const index = state.items.findIndex(item => item.product.id === id)
  if (index >= 0) {
    state.items[index].amount = state.items[index].amount + 1
  }
  return [...state.items]
}

const decreaseAmount = (id, state) => {
  const index = state.items.findIndex(item => item.product.id === id)
  if (index >= 0 && state.items[index].amount > 0) {
    state.items[index].amount = state.items[index].amount - 1
  }
  return [...state.items]
}

const deleteProduct = (id, state) => {
  const index = state.items.findIndex(item => item.product.id === id)
  if (index >= 0) {
    state.items.splice(index, 1)
  }
  return [...state.items]
}

export default function (state = initialState, action) {
  const product = action.payload
  switch (action.type) {
    case actions.INSERT_PRODUCT_IN_CART:
      return {
        ...state,
        items: addNewItem(product, state)
      }
    case actions.CHANGE_AMOUNT:
      return {
        ...state,
        items: changeAmount(action.payload.newAmount, action.payload.id, state)
      }
    case actions.INCREMENT_AMOUNT:
      return {
        ...state,
        items: incrementAmount(action.payload.id, state)
      }
    case actions.DECREASE_AMOUNT:
      return {
        ...state,
        items: decreaseAmount(action.payload.id, state)
      }
    case actions.DELETE_PRODUCT_CART:
      return {
        ...state,
        items: deleteProduct(action.payload.id, state)
      }
    case actions.SHOW_CART:
      return {
        ...state,
        displayCart: true
      }
    case actions.HIDDEN_CART:
      return {
        ...state,
        displayCart: false
      }
    case actions.TOGGLE_CART:
      return {
        ...state,
        displayCart: !state.displayCart
      }
    case actions.SET_CEP:
      return {
        ...state,
        freight: {
          ...state.freight,
          cep: action.payload.cep
        }
      }
    case actions.SET_FREIGHT:
      return {
        ...state,
        freight: {
          cep: action.payload.cep,
          value: action.payload.freight
        }
      }
    case actions.SHOW_FEEDBACK_MESSAGE:
      return {
        ...state,
        displayFeedbackMsg: true
      }
    case actions.HIDDEN_FEEDBACK_MESSAGE:
      return {
        ...state,
        displayFeedbackMsg: false
      }
    default:
      return state
  }
}
