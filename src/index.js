import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import reducers from "./reducers";
import App from "./App";
import "./css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";

//const createStoreWithMiddleware = applyMiddleware()(createStore);
// <Provider store={createStoreWithMiddleware(reducers)}>
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
