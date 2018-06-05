export const ADD_CONTACT = "ADD_CONTACT";
export const DEL_CONTACT = "DEL_CONTACT";

export const AddCont = info => ({
  type: ADD_CONTACT,
  payload: {
    info
  }
});

export const DelCont = info => ({
  type: DEL_CONTACT,
  payload: {
    info
  }
});
