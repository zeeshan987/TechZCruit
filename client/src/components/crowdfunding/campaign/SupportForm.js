import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { supportCampaign } from '../../../actions/crowdfunding/campaign';
import { Form, Modal, Button } from 'react-bootstrap';
import { CardElement, injectStripe } from 'react-stripe-elements';

const SupportForm = ({
  campaignId,
  supportCampaign,
  toggleModal,
  stripe,
  elements,
  auth
}) => {
  const [formData, setFormData] = useState({
    amount: ''
  });

  const { amount } = formData;

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

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    const cardElement = elements.getElement('card');

    if (!cardElement._complete || amount === '') {
      alert('Invlalid details entered');
    } else {
      const clientSecret = await supportCampaign(campaignId, amount);

      stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement('card'),
          billing_details: {
            email: auth.user !== null ? auth.user.email : ''
          }
        }
      });

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
          <Form.Group>
            <Form.Label>Please enter support amount</Form.Label>
            <Form.Control
              type='number'
              name='amount'
              value={amount}
              onChange={e => onChange(e)}
              placeholder='Support amount'
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
    </Fragment>
  );
};

SupportForm.propTypes = {
  campaignId: PropTypes.string.isRequired,
  supportCampaign: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  stripe: PropTypes.object.isRequired,
  elements: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(null, {
  supportCampaign
})(injectStripe(SupportForm));
