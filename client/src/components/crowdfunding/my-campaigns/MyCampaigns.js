import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAllCampaignsForUser } from '../../../actions/crowdfunding/campaign';
import MyCampaignItem from './MyCampaignItem';
import styles from '../../../css/crowdfunding/my-campaigns/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const MyCampaigns = ({
  getAllCampaignsForUser,
  campaign: { campaigns, loading }
}) => {
  useEffect(() => {
    getAllCampaignsForUser();
  }, [getAllCampaignsForUser]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> My Campaigns
          </div>
          <div className={styles.sub_heading}>
            Below is a list of all the campaigns you have created
          </div>
          <Button
            variant='primary'
            className={`my-2 ${styles.btn_primary}`}
            href='/crowdfunding/create-campaign'
          >
            <i className='fas fa-users'></i> Create new campaign
          </Button>
          {!loading && campaigns.length > 0 ? (
            campaigns.map(campaign => (
              <MyCampaignItem
                key={campaign._id}
                campaign={campaign}
                styles={styles}
              />
            ))
          ) : (
            <div className={styles.sub_heading}>No campaigns found</div>
          )}
        </div>
      </section>

      <Footer styles={styles} />
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
