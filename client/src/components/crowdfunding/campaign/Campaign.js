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

      <h1 className='large text-primary'>
        {!loading && campaign !== null ? campaign.title : ''}
      </h1>
      <Row className='mb-3'>
        <Col md={8}>
          <img
            src={placeholder}
            alt=''
            style={{ width: '100%', height: '500px' }}
          />
        </Col>
        <Col className='post p-3' md={4}>
          <div>
            <div className='lead'>Funds raised:</div>
            <h3 className='text-primary'>
              $
              {!loading && campaign !== null
                ? campaign.supporters
                    .map(supporter => supporter.amount)
                    .reduce((a, b) => a + b, 0)
                : ''}
            </h3>
            raised of required $
            {!loading && campaign !== null ? campaign.fundsRequired : ''}
          </div>
          <div>
            <div className='lead mt-3'>Supporters:</div>
            <h3 className='text-primary'>
              {!loading && campaign !== null ? campaign.supporters.length : ''}
            </h3>
          </div>
          <div>
            <div className='lead mt-3'>Completion date:</div>
            <h3 className='text-primary'>
              {!loading && campaign !== null ? (
                <Moment format='DD-MMM-YYYY'>{campaign.completionDate}</Moment>
              ) : (
                ''
              )}
            </h3>
          </div>
          <Button
            variant='primary'
            className='mt-3'
            onClick={() => toggleModal()}
          >
            Support this campaign
          </Button>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <CampaignNavigationTabs campaign={campaign} auth={auth} />
        </Col>
        <Col className='p-3' md={4}>
          <UserInfo campaign={campaign} />
        </Col>
      </Row>
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
