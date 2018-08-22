import { createStore, applyMiddleware } from "redux";

import thunkMiddleware from "redux-thunk";
import promise from "redux-promise-middleware";

import Reducers from "./Reducers/Reducers";

const store = createStore(Reducers, applyMiddleware(
  promise(),
  thunkMiddleware)
);

export default store;
