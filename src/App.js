import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Common from "./components/CardsComponents/Common";
import Buttons from "./components/Buttons/Buttons";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/btn-page" component={Buttons} />
          <Route exact path="/" component={Common} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
