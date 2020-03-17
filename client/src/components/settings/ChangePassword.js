import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { setAlert } from '../../actions/alert';
import { connect } from 'react-redux';
import { changePassword } from '../../actions/auth';

const ChangePassword = ({ setAlert, changePassword, styles }) => {
  const [formData, setFormData] = useState({
    password: '',
    password1: ''
  });

  const { password, password1 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password.trim().length === 0 || password1.trim().length === 0) {
      setAlert('Password cannot be empty', 'danger');
    } else {
      if (password !== password1) {
        setAlert('Password do not match', 'danger');
      } else {
        changePassword(password);
        setFormData({
          password: '',
          password1: ''
        });
      }
    }
  };

  return (
    <Fragment>
      <Row>
        <Col md={12}>
          <div className={styles.sub_heading}>Change password</div>
          <Form onSubmit={e => onSubmit(e)}>
            <Form.Group>
              <Form.Control
                type='password'
                placeholder='New password'
                name='password'
                value={password}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='password'
                placeholder='Confirm password'
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
              Update password
            </Button>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

ChangePassword.propTypes = {
  setAlert: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

export default connect(null, {
  setAlert,
  changePassword
})(ChangePassword);
