import { UPLOAD_IMAGE } from "../action/contentDashboard";

const initialState = {
  selectedImages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        selectedImages: [...state.selectedImages, action.payload.image]
      };
    default:
      return state;
  }
};
