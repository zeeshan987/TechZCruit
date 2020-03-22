import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Modal, Button } from 'react-bootstrap';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { sendOfferForProject } from '../../../actions/testing/project';

const DefaultOfferForm = ({
  projectId,
  sendOfferForProject,
  toggleModal,
  stripe,
  elements,
  amount
}) => {
  const cardElementStyle = {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    const cardElement = elements.getElement('card');

    if (!cardElement._complete) {
      alert('Invlalid details entered');
    } else {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement('card')
      });

      if (error) throw error;

      sendOfferForProject(projectId, amount, paymentMethod.id);

      toggleModal();
    }
  };

  return (
    <Fragment>
      <Form onSubmit={e => onSubmit(e)}>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Please enter card details below</Form.Label>
            <CardElement style={cardElementStyle} />
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
    </Fragment>
  );
};

DefaultOfferForm.propTypes = {
  projectId: PropTypes.string.isRequired,
  sendOfferForProject: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  stripe: PropTypes.object.isRequired,
  elements: PropTypes.object.isRequired,
  amount: PropTypes.number.isRequired
};

export default connect(null, {
  sendOfferForProject
})(injectStripe(DefaultOfferForm));
