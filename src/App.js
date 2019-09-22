import React, { Component, Fragment } from "react";
import { Switch, Route } from 'react-router-dom';
import Login from "../src/components/Login"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/login' render={() => <Login/>}></Route>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
