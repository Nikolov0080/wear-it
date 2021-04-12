import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Layout from './pages/layout';
import Register from './pages/register';
import Profile from './pages/profile';
import Cart from './pages/cart';
import ProductDetails from './pages/productDetails';
import UserContext from './context/UserContext';

class PageRouter extends Component {

  render() {
    return (
      <div>
        <Router>
          <UserContext>
            <Layout>
              <Switch>

                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/details/:productName/:productId" component={ProductDetails} />

              </Switch>
            </Layout>
          </UserContext>
        </Router>
      </div>

    );
  }
}

// PageRouter.contextType = Context;

export default PageRouter;