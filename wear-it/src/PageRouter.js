import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Layout from './pages/layout';
import Register from './pages/register';

class PageRouter extends Component {

  render() {
    return (
      <Router>
        <Layout>
          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

          </Switch>
        </Layout>
      </Router>
    );
  }
}

// PageRouter.contextType = Context;

export default PageRouter;