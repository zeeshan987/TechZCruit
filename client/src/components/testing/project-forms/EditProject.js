import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  getProjectById,
  updateProject
} from '../../../actions/testing/project';
import styles from '../../../css/testing/project-forms/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

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
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> Edit Project
          </div>
          <div className={styles.sub_heading}>
            Fill in the following information to edit your project
          </div>
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
            <Button
              variant='primary'
              className={styles.btn_primary}
              type='submit'
            >
              Submit
            </Button>
            <Button
              variant='danger'
              className='my-2'
              onClick={() => history.push('/testing/my-projects')}
            >
              Cancel
            </Button>
          </Form>
        </div>
      </section>

      <Footer styles={styles} />
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
