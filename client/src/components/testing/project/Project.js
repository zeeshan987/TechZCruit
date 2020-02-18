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

const Project = ({
  project: { loading, project },
  getProjectById,
  match,
  sendOfferForProject
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
            <Button
              variant='primary'
              className='mt-3'
              onClick={() => sendOfferForProject(project._id, project.amount)}
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
  getProjectById: PropTypes.func.isRequired,
  sendOfferForProject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, {
  getProjectById,
  sendOfferForProject
})(Project);
