import axios from "axios";

export const FETCH_CONTENT_BEGIN = "FETCH_CONTENT_BEGIN";
export const FETCH_CONTENT_SUCCESS = "FETCH_CONTENT_SUCCESS";
export const FETCH_CONTENT_FAILED = "FETCH_CONTENT_FAILED";
export const GET_DETAIL = "GET_DETAIL";
export const ADD_TO_CART = "ADD_TO_CART";
export const DEL_CART = "DEL_CART";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const LIKED_ICON = "LIKED_ICON";
export const INC_TOTAL = "INC_TOTAL";
export const DEC_TOTAL = "DEC_TOTAL";

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
      .get("https://us-central1-quartz-868c9.cloudfunctions.net/helloWorld")
      .then(res => {
        dispatch(fetchContentSuccess(res.data));
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
