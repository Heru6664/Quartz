import { applyMiddleware, createStore, combineReducers } from "redux";
import todo from "../reducers/reducerTodo";
import logger from "redux-logger";

const rootReducers = combineReducers({
  todo
});

const store = createStore(rootReducers, applyMiddleware(logger));

export default store;
