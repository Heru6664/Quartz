import {
  FETCH_CONTENT_BEGIN,
  FETCH_CONTENT_FAILED,
  FETCH_CONTENT_SUCCESS,
  GET_DETAIL,
  ADD_TO_CART,
  ADD_TO_FAV,
  INC_TOTAL,
  DEC_TOTAL
} from "../action/contentDashboard";

const initialState = {
  content: [],
  loading: false,
  error: null,
  detailProduct: {},
  cart: [],
  liked: [],
  quantity: [],
  quantityDec: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTENT_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CONTENT_SUCCESS:
      return {
        ...state,
        loading: false,
        content: action.payload.content
      };
    case FETCH_CONTENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        content: []
      };
    case GET_DETAIL:
      return {
        ...state,
        detailProduct: action.payload.details
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...action.payload.product, total: 1 }]
      };

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

    case ADD_TO_FAV:
      const index = state.content.findIndex(data => {
        return data.id === action.payload.liked.id;
      });
      const contentCopy = state.content.slice();
      contentCopy[index].like = !contentCopy[index].like;

      if (index !== -1) {
        return {
          ...state,
          liked: [...state.liked, action.payload.liked],
          content: contentCopy
        };
      }
    default:
      return state;
  }
};
