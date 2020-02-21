import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  getProjectById,
  updateProject
} from '../../../actions/testing/project';

const EditProjects = ({
  getProjectById,
  match,
  project: { loading, project },
  updateProject,
  history
}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    url: '',
    amount: ''
  });

  const { name, description, url, amount } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    updateProject(project._id, formData, history);
  };

  useEffect(() => {
    getProjectById(match.params.id);

    setFormData({
      name: !loading && project !== null ? project.name : '',
      description: !loading && project !== null ? project.description : '',
      url: !loading && project !== null ? project.url : '',
      amount: !loading && project !== null ? project.amount : ''
    });
    // eslint-disable-next-line
  }, [getProjectById, match.params.id, loading]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Project</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Fill in the following information to
        edit your project
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
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='URL'
            name='url'
            value={url}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='number'
            placeholder='Amount'
            name='amount'
            value={amount}
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

EditProjects.propTypes = {
  project: PropTypes.object.isRequired,
  getProjectById: PropTypes.func.isRequired,
  updateProject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, {
  getProjectById,
  updateProject
})(withRouter(EditProjects));
