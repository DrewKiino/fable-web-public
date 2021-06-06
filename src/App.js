import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import * as actions from './store/actions';

import Layout from './hoc/Layout/Layout';
import Stories from './containers/Stories/Stories';
import Login from './containers/Auth/Login/Login';
import SignUp from './containers/Auth/SignUp/SignUp';
import Logout from './containers/Auth/Logout/Logout';
import Homepage from './components/dashboard/Homepage';
import Dashboard from './components/dashboard/Dashboard';
import Users from './containers/Users/Users';
import Error from './components/Error';

class App extends Component {
  componentDidMount() {
    const { authenticated } = this.props;
    authenticated();
  }

  render() {
    const { user } = this.props;

    return (
      <Layout>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/signup" component={SignUp} />
          {
            user ? (
              <React.Fragment>
                <Route path="/stories" component={Stories} user={user} />
                <Route path="/users" component={Users} user={user} />
              </React.Fragment>
            ) :
              <Redirect to="/login" />
          }
          <Route path="/homepage" component={Homepage} />} />
          <Route path="/dashboard" component={Dashboard} />} />
          {user ? <Redirect to="/stories" /> : <Redirect to="/login" />}
          <Route component={Error} />
        </Switch>
      </Layout>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

const mapDispatchToProps = dispatch => ({
  authenticated: () => dispatch(actions.authenticated())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));