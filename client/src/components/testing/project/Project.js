import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Row, Col, Button, Form } from 'react-bootstrap';
import placeholder from '../../../img/placeholder.png';
import { connect } from 'react-redux';
import {
  getProjectById,
  sendOfferForProject
} from '../../../actions/testing/project';
import UserInfo from './UserInfo';
import styles from '../../../css/testing/project/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const Project = ({
  project: { loading, project },
  getProjectById,
  match,
  sendOfferForProject,
  auth
}) => {
  useEffect(() => {
    getProjectById(match.params.id);
  }, [getProjectById, match.params.id]);

  const [showPaymentModal, setshowPaymentModal] = useState(false);

  const toggleModal = () => {
    setshowPaymentModal(!showPaymentModal);
  };

  const [formData, setFormData] = useState({
    amount: ''
  });

  const { amount } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (amount === '') {
      alert('Amount cannot be zero');
    } else {
      sendOfferForProject(project._id, amount);
      toggleModal();
    }
  };

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <Modal show={showPaymentModal} onHide={() => toggleModal()} centered>
            <Modal.Header closeButton>
              <Modal.Title>Project title</Modal.Title>
            </Modal.Header>
            <Form onSubmit={e => onSubmit(e)}>
              <Modal.Body>
                <Form.Group>
                  <Form.Label>
                    Please enter the offer amount in US dollars
                  </Form.Label>
                  <Form.Control
                    type='number'
                    name='amount'
                    value={amount}
                    onChange={e => onChange(e)}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={() => toggleModal()}>
                  Close
                </Button>
                <Button variant='success' type='submit'>
                  Submit
                </Button>
              </Modal.Footer>
            </Form>
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
                        onClick={() =>
                          sendOfferForProject(project._id, project.amount)
                        }
                      >
                        Accept offer
                      </Button>
                    </div>
                    <div>
                      <Button
                        variant='dark'
                        className='mt-3'
                        onClick={() => toggleModal()}
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
              <div className={styles.sub_heading}>Description</div>
              {!loading && project !== null ? project.description : ''}
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
  sendOfferForProject: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  project: state.project,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getProjectById,
  sendOfferForProject
})(Project);
