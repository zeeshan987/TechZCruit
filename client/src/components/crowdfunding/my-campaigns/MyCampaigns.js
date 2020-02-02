import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAllCampaignsForUser } from '../../../actions/crowdfunding/campaign';
import MyCampaignItem from './MyCampaignItem';

const MyCampaigns = ({
  getAllCampaignsForUser,
  campaign: { campaigns, loading }
}) => {
  useEffect(() => {
    getAllCampaignsForUser();
  }, [getAllCampaignsForUser, loading]);

  return (
    <Fragment>
      <h1 className='large text-primary'>My Campaigns</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Below is a list of all the campaigns you
        have created
      </p>
      <Button
        variant='primary'
        className='my-2'
        href='/crowdfunding/create-campaign'
      >
        <i className='fas fa-users'></i> Create new campaign
      </Button>
      {!loading && campaigns.length > 0 ? (
        campaigns.map(campaign => <MyCampaignItem campaign={campaign} />)
      ) : (
        <div className='lead'>No campaigns found</div>
      )}
    </Fragment>
  );
};

MyCampaigns.propTypes = {
  getAllCampaignsForUser: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  campaign: state.campaign
});

export default connect(mapStateToProps, {
  getAllCampaignsForUser
})(MyCampaigns);
