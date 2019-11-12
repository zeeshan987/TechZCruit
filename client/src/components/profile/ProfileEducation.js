import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({ education }) => {
  return (
    <Fragment>
      <div className='col-md-6 profile-edu p-3'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='text-primary'>Education</h2>
          </div>
        </div>
        {education.map(education => (
          <div className='row edu' key={education._id}>
            <div className='col-md-12'>
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
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired
};

export default ProfileEducation;
