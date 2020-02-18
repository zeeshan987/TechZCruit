import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import PrivateRoute from './components/routing/PrivateRoute';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';
import CommunityRoutes from './components/routing/CommunityRoutes';
import CrowdfundingRoutes from './components/routing/CrowdfundingRoutes';
import BasicRoutes from './components/routing/BasicRoutes';
import './App.css';

import Projects from './components/testing/projects/Projects';
import Project from './components/testing/project/Project';
import MyProjects from './components/testing/my-projects/MyProjects';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <PrivateRoute exact path='/testing' component={Projects} />
              <PrivateRoute
                exact
                path='/testing/project/:id'
                component={Project}
              />
              <PrivateRoute
                exact
                path='/testing/my-projects'
                component={MyProjects}
              />
              <Route path='/community' component={CommunityRoutes} />
              <Route path='/crowdfunding' component={CrowdfundingRoutes} />
              <Route component={BasicRoutes} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
