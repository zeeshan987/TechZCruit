import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import ChangePassword from './ChangePassword';
import { connect } from 'react-redux';

const Settings = ({ auth }) => {
  return (
    <Fragment>
      <div className=' large text-primary'>Settings</div>
      <ProfilePicture auth={auth} />
      <Name />
      <ChangePassword />
    </Fragment>
  );
};

Settings.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Settings);
