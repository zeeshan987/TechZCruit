import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({ experiences }) => {
  return (
    <Fragment>
      <div className='col-md-6 profile-exp p-3'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='text-primary'>Experiences</h2>
          </div>
        </div>
        {experiences.map(experience => (
          <div className='row exp' key={experience._id}>
            <div className='col-md-12'>
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
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

ProfileExperience.propTypes = {
  experiences: PropTypes.array.isRequired
};

export default ProfileExperience;
