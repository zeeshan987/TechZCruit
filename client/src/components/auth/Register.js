import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import styles from '../../css/auth/style.module.css';
import { Form, Button } from 'react-bootstrap';
import Alert from '../layout/Alert';
import Footer from '../layout/Footer';

const Register = ({
  setAlert,
  register,
  auth: { isAuthenticated, loading }
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password1: ''
  });

  const { name, email, password, password1 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password1) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register(name, email, password);
    }
  };

  if (isAuthenticated && !loading) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className={styles.section}>
        <Alert />
        <div className={styles.heading}>Register</div>
        <Form className={styles.form} onSubmit={e => onSubmit(e)}>
          <Form.Group>
            <Form.Control
              type='text'
              className='form-control'
              placeholder='Name'
              name='name'
              value={name}
              onChange={e => onChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type='email'
              className='form-control'
              placeholder='Email'
              name='email'
              value={email}
              onChange={e => onChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type='password'
              className='form-control'
              placeholder='Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type='password'
              className='form-control'
              placeholder='Confirm Password'
              name='password1'
              value={password1}
              onChange={e => onChange(e)}
            />
          </Form.Group>
          <Button
            variant='primary'
            type='submit'
            className={styles.btn_primary}
          >
            Register
          </Button>
          <div className={styles.form_text}>
            Already have an account? <Link to='/login'>Click here</Link> to
            login
          </div>
        </Form>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert, register })(Register);
