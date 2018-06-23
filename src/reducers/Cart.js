import {
  ADD_TO_CART,
  DEL_CART,
  INC_TOTAL,
  DEC_TOTAL
} from "../action/contentDashboard";

const initialState = {
  cart: [],
  quantity: [],
  quantityDec: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload.product, total: 1 }]
      };

    case DEL_CART:
      const indexPCart = state.cart.findIndex(data => {
        return data.id === action.payload.product.id;
      });
      if (indexPCart !== -1) {
        return {
          ...state,
          cart: [
            ...state.cart.slice(0, indexPCart),
            ...state.cart.slice(indexPCart + 1)
          ]
        };
      }

    case INC_TOTAL:
      const incItem = state.cart.findIndex(data => {
        return data.id === action.payload.quantity.id;
      });
      if (incItem !== -1) {
        return {
          ...state,
          cart: [
            ...state.cart.slice(0, incItem),
            {
              ...action.payload.quantity,
              total: action.payload.quantity.total + 1
            },
            ...state.cart.slice(incItem + 1)
          ]
        };
      }

    case DEC_TOTAL:
      const decItem = state.cart.findIndex(data => {
        return data.id === action.payload.quantity.id;
      });
      if (decItem !== -1) {
        return {
          ...state,
          cart: [
            ...state.cart.slice(0, decItem),
            {
              ...action.payload.quantity,
              total: action.payload.quantity.total - 1
            },
            ...state.cart.slice(decItem + 1)
          ]
        };
      }

    default:
      return state;
  }
};
