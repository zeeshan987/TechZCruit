import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createTestcaseForProject } from '../../../actions/testing/project';
import styles from '../../../css/testing/projects-testcases/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

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
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> Create test case
          </div>
          <div className={styles.sub_heading}>
            Fill in the following information to create a new testcase for the
            project
          </div>
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

CreateTestcases.propTypes = {
  createTestcaseForProject: PropTypes.func.isRequired
};

export default connect(null, {
  createTestcaseForProject
})(withRouter(CreateTestcases));
