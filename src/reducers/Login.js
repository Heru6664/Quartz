import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from "../action/contentDashboard";

const initialState = {
  user: {},
  error: null,
  isLogin: false,
  isLoadingLogin: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        isLogin: false,
        isLoadingLogin: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        isLoadingLogin: false,
        user: action.payload.user
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLogin: false,
        isLoadingLogin: false,
        error: action.payload.error,
        user: []
      };
    default:
      return state;
  }
};
