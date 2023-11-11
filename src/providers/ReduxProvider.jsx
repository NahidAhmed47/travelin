import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Router from "./Router";

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default ReduxProvider;
