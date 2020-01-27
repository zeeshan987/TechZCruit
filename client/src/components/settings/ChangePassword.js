import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form } from 'react-bootstrap';

const ChangePassword = ({ auth: { user } }) => {
  return (
    <Fragment>
      <Row>
        <Col md={12}>
          <div class='lead'>Change password</div>
          <Form>
            <Form.Group>
              <Form.Control type='password' placeholder='New password' />
            </Form.Group>
            <Form.Group>
              <Form.Control type='password' placeholder='Confirm password' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Update password
            </Button>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

ChangePassword.propTypes = {
  auth: PropTypes.object.isRequired
};

export default ChangePassword;
