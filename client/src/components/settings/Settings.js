import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form } from 'react-bootstrap';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import ChangePassword from './ChangePassword';

const Settings = props => {
  return (
    <Fragment>
      <div className=' large text-primary'>Settings</div>
      <ProfilePicture />
      <Name />
      <ChangePassword />
    </Fragment>
  );
};

Settings.propTypes = {};

export default Settings;
