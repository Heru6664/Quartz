import {
  FETCH_CONTENT_BEGIN,
  FETCH_CONTENT_FAILED,
  FETCH_CONTENT_SUCCESS,
  ADD_TO_FAV
} from "../action/contentDashboard";

const initialState = {
  content: [],
  loading: false,
  error: null,
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

    case ADD_TO_FAV:
      const index = state.content.findIndex(data => {
        return data.id === action.payload.liked.id;
      });
      const index2 = state.liked.findIndex(data => {
        return data.id === action.payload.liked.id;
      });
      const contentCopy = state.content.slice();
      contentCopy[index].like = !contentCopy[index].like;
      if (index2 === -1) {
        if (index !== -1) {
          return {
            ...state,
            liked: [...state.liked, action.payload.liked],
            content: contentCopy
          };
        }
      } else {
        return {
          ...state,
          liked: [
            ...state.liked.slice(0, index2),
            ...state.liked.slice(index2 + 1)
          ]
        };
      }

    default:
      return state;
  }
};
