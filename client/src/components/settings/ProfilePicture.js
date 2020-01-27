import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';

const ProfilePicture = props => {
  return (
    <Fragment>
      <Row>
        <Col md={12}>
          <div className='lead'>Profile Picture</div>
          <div style={{ textAlign: 'center' }}>
            <img
              src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
              alt=''
              className='round-img'
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

ProfilePicture.propTypes = {};

export default ProfilePicture;
