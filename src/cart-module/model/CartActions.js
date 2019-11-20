import axios from 'axios'
import * as types from './CartTypes'

export const insertProductInCart = (product) => {
  return {
    type: types.INSERT_PRODUCT_IN_CART,
    payload: product
  }
}

export const changeAmountOfItem = (newAmount, id) => {
  return {
    type: types.CHANGE_AMOUNT,
    payload: {
      newAmount,
      id
    }
  }
}

export const incrementAmountOfItem = (id) => {
  return {
    type: types.INCREMENT_AMOUNT,
    payload: {
      id
    }
  }
}

export const decreaseAmountOfItem = (id) => {
  return {
    type: types.DECREASE_AMOUNT,
    payload: {
      id
    }
  }
}

export const deleteProductOfCart = (id) => {
  return {
    type: types.DELETE_PRODUCT_CART,
    payload: {
      id
    }
  }
}

export const showCart = () => {
  return {
    type: types.SHOW_CART
  }
}

export const hiddenCart = () => {
  return {
    type: types.HIDDEN_CART
  }
}

export const showFeedbackMessage = () => {
  return {
    type: types.SHOW_FEEDBACK_MESSAGE
  }
}

export const hiddenFeedbackMessage = () => {
  return {
    type: types.HIDDEN_FEEDBACK_MESSAGE
  }
}

export const toggleCart = () => {
  return {
    type: types.TOGGLE_CART
  }
}

export const setCep = (cep) => {
  return {
    type: types.SET_CEP,
    payload: {
      cep
    }
  }
}

const fetchFreight = (cep) => {
  const url = `https://us-central1-boitata-233919.cloudfunctions.net/api/freight/${cep}`
  return axios.get(url)
}

export const setFreight = (cep) => {
  return (dispatch) => {
    return fetchFreight(cep).then((response) => {
      const { freight } = response.data
      dispatch({
        type: types.SET_FREIGHT,
        payload: {
          cep,
          freight
        }
      })
    })
  }
}
