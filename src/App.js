import React, { Component } from "react";
import Login from "./components/Login";
import { store } from "./helpers";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home from './components/HomePage';

const wrapperDashboard = Wrapper(Home);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={wrapperDashboard} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
