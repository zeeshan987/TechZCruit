import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createTestcaseForProject } from '../../../actions/testing/project';

const CreateTestcases = ({ history, createTestcaseForProject, match }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    expectedResult: ''
  });

  const { name, description, expectedResult } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    createTestcaseForProject(match.params.id, formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create testcase</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Fill in the following information to
        create a new testcase for the project
      </p>
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group>
          <Form.Control
            type='text'
            name='name'
            value={name}
            placeholder='Name'
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            rows='5'
            name='description'
            value={description}
            placeholder='Description'
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            rows='5'
            name='expectedResult'
            value={expectedResult}
            placeholder='Expected result'
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

CreateTestcases.propTypes = {
  createTestcaseForProject: PropTypes.func.isRequired
};

export default connect(null, {
  createTestcaseForProject
})(withRouter(CreateTestcases));
