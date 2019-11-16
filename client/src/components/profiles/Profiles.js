import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileItem from './ProfileItem';
import { connect } from 'react-redux';
import { getAllProfiles } from '../../actions/profile';

const Profiles = ({ profiles, getAllProfiles }) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Profiles</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Below is the list of all the people in
        the community
      </p>
      {profiles.length === 0 ? (
        <div className='lead'>No profiles found</div>
      ) : (
        profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ))
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  profiles: PropTypes.array.isRequired,
  getAllProfiles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profiles: state.profile.profiles
});

export default connect(mapStateToProps, { getAllProfiles })(Profiles);
