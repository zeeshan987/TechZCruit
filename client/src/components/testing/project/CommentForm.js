import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCommentOnProject } from '../../../actions/testing/project';
import { Form, Button } from 'react-bootstrap';

const CommentForm = ({ project: { _id }, addCommentOnProject }) => {
  const [formData, setFormData] = useState({
    description: ''
  });

  const { description } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addCommentOnProject(_id, formData);
    setFormData({ description: '' });
  };

  return (
    <Fragment>
      <Form className='mt-3' onSubmit={e => onSubmit(e)}>
        <Form.Group>
          <Form.Control
            as='textarea'
            rows='5'
            name='description'
            value={description}
            onChange={e => onChange(e)}
            placeholder='Create a new comment'
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
  project: PropTypes.object.isRequired,
  addCommentOnProject: PropTypes.func.isRequired
};

export default connect(null, {
  addCommentOnProject
})(CommentForm);
