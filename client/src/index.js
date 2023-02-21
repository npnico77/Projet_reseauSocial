import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getUsers } from "./actions/users.actions";

//dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import { getPosts } from "./actions/post.actions";
// autre devtools qui s'affiche dans la console qui peut etre utilisé à la place de celui au dessus :
//import logger from "redux-logger";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
  // composeWithDevTools(applyMiddleware(thunk, logger))
);

store.dispatch(getUsers());
store.dispatch(getPosts());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
