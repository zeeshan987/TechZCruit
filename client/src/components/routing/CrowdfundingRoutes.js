import React, { Fragment } from 'react';
import PrivateRoute from './PrivateRoute';
import Campaigns from '../../components/crowdfunding/campaigns/Campaigns';
import MyCampaigns from '../../components/crowdfunding/my-campaigns/MyCampaigns';
import CreateCampaign from '../../components/crowdfunding/campaign-forms/CreateCampaign';
import EditCampaign from '../../components/crowdfunding/campaign-forms/EditCampaign';
import Campaign from '../../components/crowdfunding/campaign/Campaign';

export const CommunityRoutes = () => {
  return (
    <Fragment>
      <PrivateRoute exact path='/crowdfunding' component={Campaigns} />
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
    </Fragment>
  );
};

export default CommunityRoutes;
