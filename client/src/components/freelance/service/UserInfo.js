import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const UserInfo = ({ service, styles }) => {
  return (
    <Fragment>
      <div className={styles.sub_heading}>Service owner</div>
      <Row>
        <Col md={12} style={{ textAlign: 'center' }}>
          <img
            src={service !== null ? service.user.avatar : ''}
            alt=''
            style={{ width: '200px', height: '200px' }}
            className='round-img'
          />
          <h3 className='text-primary mt-3'>
            {service !== null ? service.user.name : ''}
          </h3>
        </Col>
      </Row>
    </Fragment>
  );
};

UserInfo.propTypes = {
  service: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired
};

export default UserInfo;
