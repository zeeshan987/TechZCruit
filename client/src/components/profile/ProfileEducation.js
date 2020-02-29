import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Row, Col } from 'react-bootstrap';

const ProfileEducation = ({ education, styles }) => {
  return (
    <Fragment>
      <Col md={6} className={`p-3 ${styles.profile_edu}`}>
        <Row>
          <Col className={styles.heading}>Education</Col>
        </Row>
        {education.map(education => (
          <Row key={education._id} className={styles.edu}>
            <Col md={12}>
              <div>
                <strong>{education.school}</strong>
              </div>
              <div>{education.degree}</div>
              <div>{education.fieldOfStudy}</div>
              <div>
                <Moment format='DD-MMM-YYYY'>{education.from}</Moment> {' - '}
                {education.current ? (
                  'Now'
                ) : (
                  <Moment format='DD-MMM-YYYY'>{education.to}</Moment>
                )}
              </div>
            </Col>
          </Row>
        ))}
      </Col>
    </Fragment>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired,
  styles: PropTypes.object.isRequired
};

export default ProfileEducation;
