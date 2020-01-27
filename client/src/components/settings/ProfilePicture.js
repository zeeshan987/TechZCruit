import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';

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
              className='round-img'
              style={{ width: '200px', height: '200px' }}
            />
            <div>
              <Button variant='primary' className='my-3'>
                Change profile picture
              </Button>
            </div>
          </div>
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
