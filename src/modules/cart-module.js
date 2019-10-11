const INSERT_PRODUCT_IN_CART = 'leroy-merlin/cart/INSERT_PRODUCT_IN_CART'
const DELETE_PRODUCT_CART = 'leroy-merlin/cart/DELETE_PRODUCT_CART'
const SHOW_CART = 'leroy-merlin/cart/SHOW_CART'
const HIDDEN_CART = 'leroy-merlin/cart/HIDDEN_CART'
const TOGGLE_CART = 'leroy-merlin/cart/TOGGLE_CART'

const initialState = {
  items: [],
  displayCart: false
}

export default function (state = initialState, action) {
  const product = action.payload
  switch (action.type) {
    case INSERT_PRODUCT_IN_CART:
      return {
        ...state,
        items: [...state.items, product]
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
