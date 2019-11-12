import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';

const Profile = ({ match, getProfileById, profile }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      <div className='row'>
        <div className='col-md-12'>
          <Link to='/profiles' className='btn btn-light'>
            Back to profiles
          </Link>
        </div>
      </div>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile} />
          <div className='row my-3'>
            <ProfileExperience experiences={profile.experiences} />
            <ProfileEducation education={profile.education} />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { getProfileById }
)(Profile);
