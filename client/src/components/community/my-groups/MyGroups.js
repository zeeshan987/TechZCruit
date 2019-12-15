import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllGroupsForUser } from '../../../actions/community/group';
import PropTypes from 'prop-types';
import MyGroupItem from './MyGroupItem';
import { Button } from 'react-bootstrap';

const MyGroups = ({ getAllGroupsForUser, group: { loading, groups } }) => {
  useEffect(() => {
    getAllGroupsForUser();
  }, [getAllGroupsForUser]);

  return (
    <Fragment>
      <h1 className='large text-primary'>My Groups</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Below is a list of all the groups you
        have created
      </p>
      <Button variant='primary' className='my-2'>
        <i class='fas fa-users'></i> Create new group
      </Button>
      {!loading && groups !== null ? (
        groups.map(group => <MyGroupItem group={group} />)
      ) : (
        <div className='lead'>No groups found</div>
      )}
    </Fragment>
  );
};

MyGroups.propTypes = {
  getAllGroupsForUser: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  group: state.group
});

export default connect(mapStateToProps, {
  getAllGroupsForUser
})(MyGroups);
