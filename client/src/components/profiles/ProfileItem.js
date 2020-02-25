import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Link } from 'react-router-dom';

const ProfileItem = ({ profile }) => { 
  return (
    <Fragment>
      <div className='profile p-3'>
        <Link to={`/profile/${profile.user._id}`}>
          <img src={profile.user.avatar} alt='' className='round-img' />
        </Link>

        <div className='profile-info'>
          <h2>{profile.user.name}</h2>
          <div>
            {profile.status} {profile.company ? `at ${profile.company}` : ''}
          </div>
          <div>{profile.location ? profile.location : ''}</div>
          <Link
            to={`/profile/${profile.user._id}`}
            className='btn btn-primary my-1'
          >
            View Profile
          </Link>
        </div>

        <div className='skills'>
          {profile.skills
            ? profile.skills.map(skill => (
                <div key={uuid.v4()}>
                  <i className='fas fa-check'></i> {skill}
                </div>
              ))
            : ''}
        </div>
      </div>
    </Fragment>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
