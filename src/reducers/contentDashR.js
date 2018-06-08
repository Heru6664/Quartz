import {
  FETCH_CONTENT_BEGIN,
  FETCH_CONTENT_FAILED,
  FETCH_CONTENT_SUCCESS,
  GET_DETAIL
} from "../action/contentDashboard";

const initialState = {
  content: [],
  loading: false,
  error: null,
  detailProduct: {
  }
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
      return{
        ...state,
        detailProduct: action.payload.details
      }
    default:
      return state;
  }
};
