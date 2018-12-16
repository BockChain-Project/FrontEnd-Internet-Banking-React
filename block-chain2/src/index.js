// @flow
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import "./css/index.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import authenticationReducer from "./reducers/AuthenticationReducer";
import headerReducer from "./reducers/header/HeaderReducer";
import userReducer from "./reducers/admin/UserReducer";
import clientReducer from "./reducers/client/ClientReducer";

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  headerReducer,
  userReducer,
  clientReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const root = document.getElementById("root");
if (root == null) {
  throw new Error("no root element");
}

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, root);
registerServiceWorker();
