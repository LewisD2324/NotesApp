import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import notesreducer from "./store/reducers/notes";
import thunk from "redux-thunk";
import authReducer from "./store/reducers/auth";
import { verifyAuth } from "./store/actions/auth/authActions";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const rootReducer = combineReducers({
  auth: authReducer,
  notes: notesreducer,
});

const store: any = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

//checks to see if user is logged in on refresh
store.dispatch(verifyAuth());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
