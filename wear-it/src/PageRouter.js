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
import GuestRoute from './protectedRoutes/guestRoute';
import UserRoute from './protectedRoutes/userRoute';


class PageRouter extends Component {

  render() {
    return (
      <div>
        <Router>
          <UserContext>
            <Layout>
              <Switch>

                <Route exact path="/" component={Home} />
                <GuestRoute exact path="/login" component={Login} />
                <GuestRoute exact path="/register" component={Register} />
                <UserRoute path="/profile" component={Profile} />
                <UserRoute exact path="/cart" component={Cart} />
                <UserRoute exact path="/details/:productName/:productId" component={ProductDetails} />

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