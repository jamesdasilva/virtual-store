const INSERT_PRODUCT_IN_CART = 'leroy-merlin/cart/INSERT_PRODUCT_IN_CART'
const DELETE_PRODUCT_CART = 'leroy-merlin/cart/DELETE_PRODUCT_CART'
const SHOW_CART = 'leroy-merlin/cart/SHOW_CART'
const HIDDEN_CART = 'leroy-merlin/cart/HIDDEN_CART'
const TOGGLE_CART = 'leroy-merlin/cart/TOGGLE_CART'
const CHANGE_AMOUNT = 'leroy-merlin/cart/CHANGE_AMOUNT'
const INCREMENT_AMOUNT = 'leroy-merlin/cart/INCREMENT_AMOUNT'
const DECREASE_AMOUNT = 'leroy-merlin/cart/DECREASE_AMOUNT'

const initialState = {
  items: [],
  displayCart: false
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
  if (index >= 0) {
    state.items[index].amount = state.items[index].amount - 1
  }
  return [...state.items]
}

export default function (state = initialState, action) {
  const product = action.payload
  switch (action.type) {
    case INSERT_PRODUCT_IN_CART:
      return {
        ...state,
        items: addNewItem(product, state)
      }
    case CHANGE_AMOUNT:
      return {
        ...state,
        items: changeAmount(action.payload.newAmount, action.payload.id, state)
      }
    case INCREMENT_AMOUNT:
      return {
        ...state,
        items: incrementAmount(action.payload.id, state)
      }
    case DECREASE_AMOUNT:
      return {
        ...state,
        items: decreaseAmount(action.payload.id, state)
      }
    case DELETE_PRODUCT_CART:
      return {
        ...state,
        items: [...state.items]
      }
    case SHOW_CART:
      return {
        ...state,
        displayCart: true
      }
    case HIDDEN_CART:
      return {
        ...state,
        displayCart: false
      }
    case TOGGLE_CART:
      return {
        ...state,
        displayCart: !state.displayCart
      }
    default:
      return state
  }
}

export const insertProductInCart = (product) => {
  return {
    type: INSERT_PRODUCT_IN_CART,
    payload: product
  }
}

export const changeAmountOfItem = (newAmount, id) => {
  return {
    type: CHANGE_AMOUNT,
    payload: {
      newAmount,
      id
    }
  }
}

export const incrementAmountOfItem = (id) => {
  return {
    type: INCREMENT_AMOUNT,
    payload: {
      id
    }
  }
}

export const decreaseAmountOfItem = (id) => {
  return {
    type: DECREASE_AMOUNT,
    payload: {
      id
    }
  }
}

export const showCart = () => {
  return {
    type: SHOW_CART
  }
}

export const hiddenCart = () => {
  return {
    type: HIDDEN_CART
  }
}

export const toggleCart = () => {
  return {
    type: TOGGLE_CART
  }
}
