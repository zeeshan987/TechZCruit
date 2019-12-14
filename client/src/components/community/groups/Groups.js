import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllGroups } from '../../../actions/community/group';
import PropTypes from 'prop-types';

const Groups = ({ getAllGroups }) => {
  useEffect(() => {
    getAllGroups();
  }, [getAllGroups]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Community</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Become a part of a group to view posts
        and discussions.
      </p>
    </Fragment>
  );
};

Groups.propTypes = {
  getAllGroups: PropTypes.func.isRequired
};

export default connect(null, { getAllGroups })(Groups);
