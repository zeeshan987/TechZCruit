import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  },
  styles
}) => {
  return (
    <Fragment>
      <Row className={`p-3 my-3 ${styles.profile_about}`}>
        <Col md={12}>
          <Row>
            <Col md={12}>
              <div className={styles.heading}>
                {name.split(' ')[0] + "'s"} Bio
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className={`text-justify ${styles.sub_heading}`}>{bio}</div>
            </Col>
          </Row>
          <Row className={styles.skills}>
            {skills.map(skill => (
              <div key={uuidv4()} className='p-2'>
                <i className='fas fa-check'></i> {skill}
              </div>
            ))}
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired
};

export default ProfileAbout;
