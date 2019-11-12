import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  return (
    <Fragment>
      <div className='row profile-about p-3 my-3'>
        <div className='col-md-12'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='text-primary'>{name.split(' ')[0] + "'s"} Bio</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <p>{bio}</p>
            </div>
          </div>
          <div className='row skills'>
            {skills.map(skill => (
              <div className='p-2'>
                <i className='fas fa-check'></i> {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
