import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCampaignById } from '../../../actions/crowdfunding/campaign';
// import Spinner from '../../../../components/layout/Spinner';
import square3 from '../../../img/square1.jpg';

const ProjectStory = ({ campaign, getCampaignById, match, auth }) => {
  //   useEffect(() => {
  //     getCampaignById(match.params.id);
  //   }, [getCampaignById, match.params.id]);

  return (
    <Fragment>
      <p>{campaign.campaignDescription}</p>
      <img src={square3} />
    </Fragment>
  );
};

ProjectStory.propTypes = {
  campaign: PropTypes.object.isRequired,
  getCampaignById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  campaign: state.campaign.campaign,
  auth: state.campaign.auth
});

export default connect(mapStateToProps, { getCampaignById })(ProjectStory);
