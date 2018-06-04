import App from "./src";
import { Provider } from "react-redux";
import store from "./src/store/storeTodo";
import React from "react";

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
