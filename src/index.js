import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import login from "./store/reducer/login/login";
import payment from "./store/reducer/payment/payment";
import solution from "./store/reducer/solutions/solutions";
import loader from "./store/reducer/loader";
import mapLoader from "./store/reducer/mappingLoader";
import paymentLoader from "./store/reducer/paymentLoader";
import createSagaMiddleware from "redux-saga";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Theme from "./theme/theme";

import { watchSagaLogin } from "./store/saga/index";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = compose
  // process.env.NODE_ENV === "development"
  //   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //   : compose;

const rootReducers = combineReducers({
  login: login,
  payment: payment,
  solution: solution,
  loader: loader,
  mapLoader: mapLoader,
  paymentLoader: paymentLoader,
});

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchSagaLogin);

ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <App />
      {/* <CssBaseline /> */}
    </ThemeProvider>
    {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById("root")
);
