import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { getCampaignById } from '../../../actions/crowdfunding/campaign';
import { connect } from 'react-redux';
import CampaignNavigationTabs from './CampaignNavigationTabs';
import UserInfo from './UserInfo';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import placeholder from '../../../img/placeholder.png';
import Moment from 'react-moment';
import { StripeProvider, Elements } from 'react-stripe-elements';
import SupportForm from './SupportForm';
import styles from '../../../css/crowdfunding/campaign/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const Campaign = ({
  campaign: { campaign, loading },
  getCampaignById,
  match,
  auth
}) => {
  useEffect(() => {
    getCampaignById(match.params.id);
  }, [getCampaignById, match.params.id]);

  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const toggleModal = () => {
    setShowPaymentModal(!showPaymentModal);
  };

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <Modal show={showPaymentModal} onHide={() => toggleModal()} centered>
            <Modal.Header closeButton>
              <Modal.Title>Campaign title</Modal.Title>
            </Modal.Header>
            <StripeProvider apiKey='pk_test_qFCTODVMoaT4TXgRvnQ75GPR00dFX40yVb'>
              <Elements>
                <SupportForm
                  campaignId={campaign !== null ? campaign._id : ''}
                  toggleModal={toggleModal}
                  auth={auth}
                />
              </Elements>
            </StripeProvider>
          </Modal>

          <div className={styles.heading}>
            {!loading && campaign !== null ? campaign.title : ''}
          </div>
          <Row className='my-3'>
            <Col md={8}>
              <img
                src={placeholder}
                alt=''
                style={{ width: '100%', height: '500px' }}
              />
            </Col>
            <Col className='post p-3' md={4}>
              <div>
                <div>Funds raised:</div>
                <div className={styles.sub_heading}>
                  $
                  {!loading && campaign !== null
                    ? campaign.supporters
                        .map(supporter => supporter.amount)
                        .reduce((a, b) => a + b, 0)
                    : ''}
                </div>
                raised of required $
                {!loading && campaign !== null ? campaign.fundsRequired : ''}
              </div>
              <div>
                <div className='mt-3'>Supporters:</div>
                <h3 className={styles.sub_heading}>
                  {!loading && campaign !== null
                    ? campaign.supporters.length
                    : ''}
                </h3>
              </div>
              <div>
                <div className='mt-3'>Completion date:</div>
                <div>
                  {!loading && campaign !== null ? (
                    <Moment format='DD-MMM-YYYY' className={styles.sub_heading}>
                      {campaign.completionDate}
                    </Moment>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              <Button
                variant='primary'
                className={`mt-3 ${styles.btn_primary}`}
                onClick={() => toggleModal()}
              >
                Support this campaign
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <CampaignNavigationTabs
                campaign={campaign}
                auth={auth}
                styles={styles}
              />
            </Col>
            <Col className='p-3' md={4}>
              <UserInfo campaign={campaign} styles={styles} />
            </Col>
          </Row>
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

Campaign.propTypes = {
  campaign: PropTypes.object.isRequired,
  getCampaignById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  campaign: state.campaign,
  auth: state.auth
});
export default connect(mapStateToProps, {
  getCampaignById
})(Campaign);
