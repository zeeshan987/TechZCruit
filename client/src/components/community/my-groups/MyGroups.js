import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const MyGroups = props => {
  return (
    <Fragment>
      <h1 className='large text-primary'>My Groups</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Below is a list of all the groups you
        have created
      </p>
    </Fragment>
  );
};

MyGroups.propTypes = {};

export default MyGroups;
