import axios from "axios";

export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const DEC_TOTAL = "DEC_TOTAL";
export const DEL_CART = "DEL_CART";
export const FETCH_CONTENT_BEGIN = "FETCH_CONTENT_BEGIN";
export const FETCH_CONTENT_SUCCESS = "FETCH_CONTENT_SUCCESS";
export const FETCH_CONTENT_FAILED = "FETCH_CONTENT_FAILED";
export const GET_DETAIL = "GET_DETAIL";
export const INC_TOTAL = "INC_TOTAL";
export const LOGIN_BEGIN = "LOGIN_BEGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_CLEAR_ERROR = "LOGIN_CLEAR_ERROR";
export const LOGOUT = "LOGOUT";
export const LIKED_ICON = "LIKED_ICON";
export const REMV_FRM_FAV = "REMV_FRM_FAV";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";


export const loginBegin = user => ({
  type: LOGIN_BEGIN,
  payload: { user }
});

export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: { user }
});

export const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload: { error }
});

export const clearError = () => ({
  type: LOGIN_CLEAR_ERROR
});

export const loginAuth = (email, password) => {
  return dispatch => {
    dispatch(loginBegin());
    axios
      .post("https://us-central1-quartz-868c9.cloudfunctions.net/loginAuth", {
        email: email,
        password: password
      })
      .then(res => {
        console.log(res.data);
        if (res.data.status === "success") {
          dispatch(loginSuccess(res.data));
        } else {
          dispatch(loginFailed(res.data));
        }
        return res.data;
      })
      .catch(e => console.log(e));
  };
};

export const logout = () => ({
  type: LOGOUT
})

export const fecthContentBegin = () => ({
  type: FETCH_CONTENT_BEGIN
});

export const fetchContentSuccess = content => ({
  type: FETCH_CONTENT_SUCCESS,
  payload: { content }
});

export const fetchContentFailed = error => ({
  type: FETCH_CONTENT_FAILED,
  payload: { error }
});

export const fetchContent = () => {
  return dispatch => {
    dispatch(fecthContentBegin());
    axios
      .get("https://us-central1-quartz-868c9.cloudfunctions.net/products")
      .then(res => {
        dispatch(fetchContentSuccess(res.data.products));
        return res.data;
      })
      .catch(e => console.log(e));
  };
};

export const getDetail = details => ({
  type: GET_DETAIL,
  payload: {
    details
  }
});

export const addCart = product => ({
  type: ADD_TO_CART,
  payload: {
    product
  }
});

export const delCart = product => ({
  type: DEL_CART,
  payload: {
    product
  }
});

export const incTotal = quantity => ({
  type: INC_TOTAL,
  payload: {
    quantity
  }
});

export const decTotal = quantity => ({
  type: DEC_TOTAL,
  payload: {
    quantity
  }
});

export const addFav = liked => ({
  type: ADD_TO_FAV,
  payload: {
    liked
  }
});

export const remvFav = liked => ({
  type: REMV_FRM_FAV,
  payload: {
    liked
  }
});

export const uploadImage = image => ({
  type: UPLOAD_IMAGE,
  payload: {
    image
  }
});
