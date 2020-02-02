import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';
import { Row, Col, Container } from 'react-bootstrap';

const UserInfo = ({ campaign }) => {
  return (
    <Fragment>
      <div className='lead'>Campaign owner:</div>
      <Row>
        <Col md={12} style={{ textAlign: 'center' }}>
          <img src={campaign !== null ? campaign.user.avatar : ''} alt='' style={{width: '200px', height: '200px'}} className='round-img' />
          <h3 className='text-primary mt-3'>{campaign !== null ? campaign.user.name: ''}</h3>
        </Col>
      </Row>
      
    </Fragment>
  );
};

UserInfo.propTypes = {
  campaign: PropTypes.object.isRequired
};

export default UserInfo;
