import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form } from 'react-bootstrap';

const ProfilePicture = ({ auth: { user } }) => {
  return (
    <Fragment>
      <Row>
        <Col md={12}>
          <div className='lead'>Profile Picture</div>
          <div style={{ textAlign: 'center' }}>
            <img
              src={user !== null ? user.avatar : ''}
              alt=''
              className='round-img my-3'
              style={{ width: '200px', height: '200px' }}
            ></img>
          </div>
          <Form>
            <Form.Group>
              <Form.Control type='file' />
            </Form.Group>
            <Button variant='primary'>Upload profile picture</Button>
          </Form>
          <Button variant='danger' className='my-3'>
            Remove profile picture
          </Button>
        </Col>
      </Row>
      <hr />
    </Fragment>
  );
};

ProfilePicture.propTypes = {
  auth: PropTypes.object.isRequired
};

export default ProfilePicture;
