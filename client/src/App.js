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
import HomePage from './components/crowdfunding/campaigns/Campaigns';
import MyCampaigns from './components/crowdfunding/my-campaigns/MyCampaigns';
import CreateCampaign from './components/crowdfunding/campaign-forms/CreateCampaign';
import EditCampaign from './components/crowdfunding/campaign-forms/EditCampaign';
import Campaign from './components/crowdfunding/campaign/Campaign';
import './App.css';

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
              <PrivateRoute exact path='/crowdfunding' component={HomePage} />
              <PrivateRoute
                exact
                path='/crowdfunding/campaign/:id'
                component={Campaign}
              />
              <PrivateRoute
                exact
                path='/crowdfunding/my-campaigns'
                component={MyCampaigns}
              />
              <PrivateRoute
                exact
                path='/crowdfunding/create-campaign'
                component={CreateCampaign}
              />
              <PrivateRoute
                exact
                path='/crowdfunding/edit-campaign/:id'
                component={EditCampaign}
              />
              <Route component={CommunityRoutes} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
