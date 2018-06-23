import { applyMiddleware, createStore, combineReducers } from "redux";
import todo from "../reducers/reducerTodo";
import logger from "redux-logger";
import thunk from "redux-thunk";

import infoContact from "../reducers/reducerContact";
import auth from "../reducers/Login";
import content from "../reducers/contentDashR";
import details from "../reducers/GetDetail";
import cart from "../reducers/Cart";

const rootReducers = combineReducers({
  todo,
  infoContact,
  content,
  auth,
  details,
  cart
});

const store = createStore(
  rootReducers,
  applyMiddleware(logger),
  applyMiddleware(thunk)
);

export default store;
