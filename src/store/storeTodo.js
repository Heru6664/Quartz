import { applyMiddleware, createStore, combineReducers } from "redux";
import todo from "../reducers/reducerTodo";
import logger from "redux-logger";
import infoContact from "../reducers/reducerContact";

const rootReducers = combineReducers({
  todo,
  infoContact
});

const store = createStore(rootReducers, applyMiddleware(logger));

export default store;
