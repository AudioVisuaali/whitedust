import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import promise from "redux-promise-middleware";

import Reducers from "./Reducers/Reducers";

const store = createStore(Reducers, applyMiddleware(
  promise(),
  thunkMiddleware,
  logger)
);

export default store;
