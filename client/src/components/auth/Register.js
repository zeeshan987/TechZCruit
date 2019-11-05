import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';

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
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create your account
      </p>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            className='form-control'
            placeholder='Email'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            This site used Gravatar, so if you want a profile image use an email
            associated with a gravatar account
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            placeholder='Password'
            name='password'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            className='form-control'
            placeholder='Confirm Password'
            name='password1'
            value={password1}
            onChange={e => onChange(e)}
          />
        </div>
        <input type='submit' value='Register' className='btn btn-primary' />
      </form>
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

export default connect(
  mapStateToProps,
  { setAlert, register }
)(Register);
