import React, { Component, Fragment } from "react";
import { Switch, Route } from 'react-router-dom';
import Login from "../src/components/Login"
import Cadastrar from "../src/components/Cadastrar"
import Navbar from "./components/Navbar"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/login' render={() => <Login/>}></Route>
          <Route exact path='/cadastrar' render={() => <Cadastrar/>}></Route>
          <Route exact path='/dashboard' render={() => <Navbar/>}></Route>

        </Switch>
      </Fragment>
    );
  }
}

export default App;
