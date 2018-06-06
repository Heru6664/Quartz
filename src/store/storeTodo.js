import { applyMiddleware, createStore, combineReducers } from "redux";
import todo from "../reducers/reducerTodo";
import logger from "redux-logger";
import infoContact from "../reducers/reducerContact";
import content from "../reducers/contentDashR";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  todo,
  infoContact,
  content
});

const store = createStore(
  rootReducers,
  applyMiddleware(logger),
  applyMiddleware(thunk)
);

export default store;
