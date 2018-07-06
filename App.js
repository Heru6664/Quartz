import App from "./src";
import { Provider } from "react-redux";
import { store, persistore } from "./src/store/storeTodo";
import { PersistGate } from "redux-persist/lib/integration/react";
import React from "react";

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistore}>
      <App />
    </PersistGate>
  </Provider>
);
