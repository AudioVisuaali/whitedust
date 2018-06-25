import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import MainPageChecks from "./MainPageChecks";

import WelcomeBox from "./MainPageWelcomeBox";
import MainPageResetPassword from "./MainPageResetPassword";
import MainPageRegister from "./MainPageRegister";
import MainPageLogin from "./MainPageLogin";
import MainPageUpdates from "./MainPageUpdates";
import MainPageContinue from "./MainPageContinue";

import Panel from "./Panel/Panel";
import Inspect from "./Inspect/Inspect";

import { userPresent } from "../Actions/MainPageActions"

class App extends Component {

  componentWillMount() {
    this.props.dispatch({type: "FETCH_USER", payload: null })
    this.props.dispatch(userPresent())
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact render={(props) => <MainPageChecks {...props} inner={WelcomeBox} />}            path="/" />
          <Route exact render={(props) => <MainPageChecks {...props} inner={MainPageResetPassword} />} path="/forgot" />
          <Route exact render={(props) => <MainPageChecks {...props} inner={MainPageRegister} />}      path="/register" />
          <Route exact render={(props) => <MainPageChecks {...props} inner={MainPageLogin} />}         path="/login" />
          <Route exact render={(props) => <MainPageChecks {...props} inner={MainPageUpdates} />}       path="/updates" />
          <Route exact render={(props) => <MainPageChecks {...props} inner={MainPageContinue} />}      path="/continue" />
          <Route       render={(props) => <Panel {...props} />}                                        path="/panel" />
          <Route       render={(props) => <Inspect {...props} />}                                      path="/inspect/:id" />
          <Route       component={notFound} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => { 
  return { } 
}

export default connect(mapStateToProps)(App);

class notFound extends Component {
  render() {
    return (
      <p>404</p>
    )
  }
}
