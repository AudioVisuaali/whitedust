import { combineReducers } from "redux";

import MainPage from "./MainPage";
import Builds from "./Builds";
import Login from "./Login";
import Register from "./Register";
import Inspect from "./Inspect";
import Recover from "./Recover";
import Build from "./Build";
import Part from "./Part";

const reducers = combineReducers({
  mainPage: MainPage,
  builds: Builds,
  login: Login,
  register: Register,
  inspect: Inspect,
  recover: Recover,
  build: Build,
  part: Part
})

export default reducers;
