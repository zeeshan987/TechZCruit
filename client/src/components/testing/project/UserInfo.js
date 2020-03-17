import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const UserInfo = ({ project, styles }) => {
  return (
    <Fragment>
      <div className={styles.sub_heading}>Project owner</div>
      <Row>
        <Col md={12} style={{ textAlign: 'center' }}>
          <img
            src={project !== null ? project.user.avatar : ''}
            alt=''
            style={{ width: '200px', height: '200px' }}
            className='round-img'
          />
          <h3 className='text-primary mt-3'>
            {project !== null ? project.user.name : ''}
          </h3>
        </Col>
      </Row>
    </Fragment>
  );
};

UserInfo.propTypes = {
  project: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired
};

export default UserInfo;
