import axios from "axios";

export const FETCH_CONTENT_BEGIN = "FETCH_CONTENT_BEGIN";
export const FETCH_CONTENT_SUCCESS = "FETCH_CONTENT_SUCCESS";
export const FETCH_CONTENT_FAILED = "FETCH_CONTENT_FAILED";

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
