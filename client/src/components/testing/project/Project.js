import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import placeholder from '../../../img/placeholder.png';
import { connect } from 'react-redux';
import { getProjectById } from '../../../actions/testing/project';
import UserInfo from './UserInfo';

const Project = ({ project: { loading, project }, getProjectById, match }) => {
  useEffect(() => {
    getProjectById(match.params.id);
  }, [getProjectById, match.params.id]);

  return (
    <Fragment>
      {/* <Modal show={showPaymentModal} onHide={() => toggleModal()} centered>
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
      </Modal> */}

      <h1 className='large text-primary'>
        {!loading && project !== null ? project.name : ''}
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
            <div className='lead'>Amount being offered:</div>
            <h3 className='text-primary'>
              ${!loading && project !== null ? project.amount : ''}
            </h3>
          </div>
          <div>
            <div className='lead mt-3'>URL:</div>
            {!loading && project !== null ? (
              <a href={project.url}>{project.url}</a>
            ) : (
              ''
            )}
          </div>
          <div>
            <Button variant='primary' className='mt-3'>
              Accept offer
            </Button>
          </div>
          <div>
            <Button variant='dark' className='mt-3'>
              Send custom offer
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          {/* <CampaignNavigationTabs campaign={campaign} auth={auth} /> */}
          <div className='lead mt-3'>Description:</div>
          {!loading && project !== null ? project.description : ''}
        </Col>
        <Col className='p-3' md={4}>
          <UserInfo project={project} />
        </Col>
      </Row>
    </Fragment>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  getProjectById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, {
  getProjectById
})(Project);
