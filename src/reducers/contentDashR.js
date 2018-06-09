import {
  FETCH_CONTENT_BEGIN,
  FETCH_CONTENT_FAILED,
  FETCH_CONTENT_SUCCESS,
  GET_DETAIL,
  ADD_TO_CART,
  ADD_TO_FAV
} from "../action/contentDashboard";

const initialState = {
  content: [],
  loading: false,
  error: null,
  detailProduct: {},
  cart: [],
  liked: []
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
        cart: [...state.cart, action.payload.product]
      };
    case ADD_TO_FAV:
      return {
        ...state,
        liked: [...state.liked, action.payload.liked]
      };
    default:
      return state;
  }
};
