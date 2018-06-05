import { ADD_CONTACT, DEL_CONTACT } from "../action/actionContact";

const initialState = {
  infoContact: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        infoContact: [
          ...state.infoContact,
          {
            id: state.infoContact.length + 1,
            infoName: action.payload.info.name,
            infoPhone: action.payload.info.phone
          }
        ]
      };
    case DEL_CONTACT:
      const index = state.infoContact.findIndex(info => {
        return info.id === action.payload.info.id;
      });
      if (index != -1) {
        return {
          ...state,
          infoContact: [
            ...state.infoContact.slice(0, index),
            ...state.infoContact.slice(index + 1)
          ]
        };
      }

    default:
      return state;
  }
};
