import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAllCampaigns } from '../../../actions/crowdfunding/campaign';
import CampaignItem from './CampaignItem';

const Campaigns = ({ getAllCampaigns, campaign: { loading, campaigns } }) => {
  useEffect(() => {
    getAllCampaigns();
  }, [getAllCampaigns]);
  return (
    <Fragment>
      <h1 className='large text-primary'>Crowdfunding</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Support a campaign or acquire funding
        for your own campaigns
      </p>
      <Form>
        <Form.Group>
          <Form.Control type='text' placeholder='Search campaigns' />
        </Form.Group>
      </Form>
      <Row>
        {!loading && campaigns.length > 0 ? (
          campaigns.map(campaign => (
            <CampaignItem key={campaign._id} campaign={campaign} />
          ))
        ) : (
          <div className='lead'>No campaigns found</div>
        )}
      </Row>
    </Fragment>
  );
};

Campaigns.propTypes = {
  getAllCampaigns: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  campaign: state.campaign
});

export default connect(mapStateToProps, {
  getAllCampaigns
})(Campaigns);
