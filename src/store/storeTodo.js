import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, createStore, combineReducers } from "redux";
import todo from "../reducers/reducerTodo";
import logger from "redux-logger";
import thunk from "redux-thunk";

import infoContact from "../reducers/reducerContact";
import auth from "../reducers/Login";
import content from "../reducers/contentDashR";
import details from "../reducers/GetDetail";
import cart from "../reducers/Cart";
import uploadImage from "../reducers/uploadImage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"]
};

const rootReducers = combineReducers({
  todo,
  infoContact,
  content,
  auth,
  details,
  cart,
  uploadImage
});

const pReducers = persistReducer(persistConfig, rootReducers);

export const store = createStore(
  pReducers,
  applyMiddleware(logger),
  applyMiddleware(thunk)
);

export const persistore = persistStore(store);
