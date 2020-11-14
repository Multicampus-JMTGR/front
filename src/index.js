import React from "react";
import { render } from "react-dom";
import App from "./layouts/App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import axios from "axios";

const store = createStore(
  rootReducer,
  process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);
if (process.env.NODE_ENV !== "development") {
  axios.defaults.baseURL =
    "https://7oxpckq4u7.execute-api.us-east-1.amazonaws.com/jmtgr";
}

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
