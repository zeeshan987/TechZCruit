import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import placeholder from '../../../img/placeholder.png';
import { connect } from 'react-redux';
import { getProjectById } from '../../../actions/testing/project';
import UserInfo from './UserInfo';
import styles from '../../../css/testing/project/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CustomOfferFrom from './CustomOfferForm';
import DefaultOfferForm from './DefaultOfferForm';
import ProjectNavigationTabs from './ProjectNavigationTabs';

const Project = ({
  project: { loading, project },
  getProjectById,
  match,
  auth
}) => {
  useEffect(() => {
    getProjectById(match.params.id);
  }, [getProjectById, match.params.id]);

  const [
    showCustomOfferPaymentModal,
    setshowCustomOfferPaymentModal
  ] = useState(false);

  const toggleCustomOfferPaymentModal = () => {
    setshowCustomOfferPaymentModal(!showCustomOfferPaymentModal);
  };

  const [
    showDefaultOfferPaymentModal,
    setShowDefaultOfferPaymentModal
  ] = useState(false);

  const toggleDefaultOfferPaymentModal = () => {
    setShowDefaultOfferPaymentModal(!showDefaultOfferPaymentModal);
  };

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />

          <Modal
            show={showDefaultOfferPaymentModal}
            onHide={() => toggleDefaultOfferPaymentModal()}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>{project !== null && project.name}</Modal.Title>
            </Modal.Header>
            <StripeProvider apiKey='pk_test_qFCTODVMoaT4TXgRvnQ75GPR00dFX40yVb'>
              <Elements>
                <DefaultOfferForm
                  projectId={project !== null ? project._id : ''}
                  toggleModal={toggleDefaultOfferPaymentModal}
                  amount={project !== null ? project.amount : ''}
                />
              </Elements>
            </StripeProvider>
          </Modal>

          <Modal
            show={showCustomOfferPaymentModal}
            onHide={() => toggleCustomOfferPaymentModal()}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>{project !== null && project.name}</Modal.Title>
            </Modal.Header>
            <StripeProvider apiKey='pk_test_qFCTODVMoaT4TXgRvnQ75GPR00dFX40yVb'>
              <Elements>
                <CustomOfferFrom
                  projectId={project !== null ? project._id : ''}
                  toggleModal={toggleCustomOfferPaymentModal}
                />
              </Elements>
            </StripeProvider>
          </Modal>

          <div className={styles.heading}>
            {!loading && project !== null ? project.name : ''}
          </div>
          <Row className='my-3'>
            <Col md={8}>
              <img
                src={placeholder}
                alt=''
                style={{ width: '100%', height: '500px' }}
              />
            </Col>
            <Col className='p-3' md={4}>
              <div>
                <div>Amount being offered:</div>
                <h3 className={styles.sub_heading}>
                  ${!loading && project !== null ? project.amount : ''}
                </h3>
              </div>
              <div>
                <div className='mt-3'>URL:</div>
                {!loading && project !== null ? (
                  <a href={project.url}>{project.url}</a>
                ) : (
                  ''
                )}
              </div>
              {!loading &&
                auth.user !== null &&
                project !== null &&
                auth.user._id !== project.user._id &&
                project.offers
                  .map(offer => offer.user._id)
                  .indexOf(auth.user._id) === -1 &&
                project.testers
                  .map(tester => tester.user._id)
                  .indexOf(auth.user._id) === -1 && (
                  <Fragment>
                    {' '}
                    <div>
                      <Button
                        variant='primary'
                        className={`mt-3 ${styles.btn_primary}`}
                        onClick={() => toggleDefaultOfferPaymentModal()}
                      >
                        Accept offer
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant='dark'
                        className='mt-3'
                        onClick={() => toggleCustomOfferPaymentModal()}
                      >
                        Send custom offer
                      </Button>
                    </div>
                  </Fragment>
                )}
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <ProjectNavigationTabs
                project={project}
                auth={auth}
                styles={styles}
              />
            </Col>
            <Col md={4}>
              <UserInfo project={project} styles={styles} />
            </Col>
          </Row>
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
  getProjectById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getProjectById
})(Project);
