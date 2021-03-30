import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home'
class PageRouter extends Component {

  render() {
    return (
      <Router>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Login} />
          <Route exact path="/profile" component={Login} />

        </Switch>
      </Router>
    );
  }
}

// PageRouter.contextType = Context;

export default PageRouter;