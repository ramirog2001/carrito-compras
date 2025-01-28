import { useReducer } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({ children }) => {


  const addProduct = (product, quantity = 1) => {
    const action = {
      type: '[CART] AddProduct',
      payload: { product, quantity }
    }
    dispatch(action)
  }


  const removeProduct = (product, quantity = 1) => {
    const action = {
      type: '[CART] RemoveProduct',
      payload: { product, quantity }
    }
    dispatch(action)
  }


  const removeAllProduct = (product) => {
    const action = {
      type: '[CART] RemoveAllProduct',
      payload: { product }
    }
    dispatch(action)
  }

  const shoppingReducer = (state, action) => {
    let index = 0
    switch (action.type) {
      case '[CART] AddProduct':
        index = state.findIndex(product => product.id === action.payload.product.id)
        if (index != -1) {
          const quantity = state[index].quantity + action.payload.quantity
          return [
            ...state.slice(0, index),
            { ...action.payload.product, quantity },
            ...state.slice(index + 1)
          ]
        }
        return [...state, { ...action.payload.product, quantity: action.payload.quantity }];

      case '[CART] RemoveProduct':
        index = state.findIndex(product => product.id === action.payload.product.id)
        if (index != -1) {
          const quantity = Math.max(state[index].quantity - action.payload.quantity, 0)
          if (quantity == 0)
            return state.filter(item => item.id != action.payload.product.id)
          return [
            ...state.slice(0, index),
            { ...action.payload.product, quantity },
            ...state.slice(index + 1)
          ]
        }
        return state;

      case '[CART] RemoveAllProduct':
        return state.filter(item => item.id != action.payload.product.id)

      default:
        return state;
    }
  }


  const initialState = []

  const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState)

  return (
    <CartContext.Provider value={{ shoppingList, addProduct, removeProduct, removeAllProduct }}>
      {children}
    </CartContext.Provider>
  )
}
