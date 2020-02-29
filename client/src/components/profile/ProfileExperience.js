import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Row, Col } from 'react-bootstrap';

const ProfileExperience = ({ experiences, styles }) => {
  return (
    <Fragment>
      <Col md={6} className={`p-3 ${styles.profile_exp}`}>
        <Row>
          <Col md={12}>
            <div className={styles.heading}>Experiences</div>
          </Col>
        </Row>
        {experiences.map(experience => (
          <Row key={experience._id} className={styles.exp}>
            <Col md={12}>
              <div>
                <strong>{experience.company}</strong>
              </div>
              <div>{experience.position}</div>
              <div>{experience.description}</div>
              <div>
                <Moment format='DD-MMM-YYYY'>{experience.from}</Moment> {' - '}
                {experience.current ? (
                  'Now'
                ) : (
                  <Moment format='DD-MMM-YYYY'>{experience.to}</Moment>
                )}
              </div>
            </Col>
          </Row>
        ))}
      </Col>
    </Fragment>
  );
};

ProfileExperience.propTypes = {
  experiences: PropTypes.array.isRequired,
  styles: PropTypes.object.isRequired
};

export default ProfileExperience;
