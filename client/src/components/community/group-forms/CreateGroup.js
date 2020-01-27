import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createGroup } from '../../../actions/community/group';
import { withRouter } from 'react-router-dom';

const CreateGroup = ({ createGroup, history }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const { name, description } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    createGroup(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Group</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Fill in the following information to
        create a new group
      </p>
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            rows='5'
            placeholder='Description'
            name='description'
            value={description}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

CreateGroup.propTypes = {
  createGroup: PropTypes.func.isRequired
};

export default connect(null, {
  createGroup
})(withRouter(CreateGroup));
