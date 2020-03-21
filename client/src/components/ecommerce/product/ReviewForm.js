import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCommentOnCampaign } from '../../../actions/crowdfunding/campaign';
import { Form, Button } from 'react-bootstrap';

const CommentForm = ({ product: { _id }, addCommentOnCampaign, styles }) => {
  const [formData, setFormData] = useState({
    description: ''
  });

  const { description } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addCommentOnCampaign(_id, formData);
    setFormData({ description: '' });
  };

  return (
    <Fragment>
      <Form className='mt-3' onSubmit={e => onSubmit(e)}>
        <Form.Group className={styles.rating}>
          <Form.Check
            inline
            name='current'
            type='radio'
            label={<i class='fas fa-star'></i>}
          />
          <Form.Check
            inline
            name='current'
            type='radio'
            label={<i class='fas fa-star'></i>}
          />
          <Form.Check
            inline
            name='current'
            type='radio'
            label={<i class='fas fa-star'></i>}
            // className='checked'
          />
          <Form.Check
            inline
            name='current'
            type='radio'
            label={<i class='fas fa-star'></i>}
          />
          <Form.Check
            inline
            name='current'
            type='radio'
            label={<i class='fas fa-star'></i>}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            as='textarea'
            rows='5'
            name='description'
            value={description}
            onChange={e => onChange(e)}
            placeholder='Create a new review'
          />
        </Form.Group>
        <Button variant='dark' type='submit'>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

CommentForm.propTypes = {
  product: PropTypes.object.isRequired,
  addCommentOnCampaign: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

export default connect(null, {
  addCommentOnCampaign
})(CommentForm);
