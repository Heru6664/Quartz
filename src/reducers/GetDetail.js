import { GET_DETAIL } from "../action/contentDashboard";

const initialState = {
  detailProduct: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL:
      return {
        ...state,
        detailProduct: action.payload.details
      };

    default:
      return state;
  }
};
