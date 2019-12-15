import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllGroups } from '../../../actions/community/group';
import PropTypes from 'prop-types';
import GroupItem from './GroupItem';

const Groups = ({ getAllGroups, group: { loading, groups } }) => {
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
      {!loading && groups !== null ? (
        groups.map(group => <GroupItem group={group} />)
      ) : (
        <div className='lead'>No groups found</div>
      )}
    </Fragment>
  );
};

Groups.propTypes = {
  getAllGroups: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  group: state.group
});

export default connect(mapStateToProps, {
  getAllGroups
})(Groups);
