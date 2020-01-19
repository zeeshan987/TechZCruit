import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { removeMemberFromGroup } from '../../../../actions/community/group';

const GroupMemberItem = ({
  member,
  isAdmin,
  auth,
  group,
  removeMemberFromGroup
}) => {
  return (
    <Fragment>
      <div className='profile my-3 p-3'>
        <Link to={`/profile/${member._id}`}>
          <img src={member.avatar} alt='' className='round-img' />
        </Link>

        <div className='profile-info'>
          <h2>{member.name}</h2>
          {isAdmin ? <h5>Admin</h5> : ''}
          {auth !== null && !isAdmin && auth.user._id === group.admin._id && (
            <Button
              variant='danger'
              className='my-2'
              onClick={() => removeMemberFromGroup(group._id, member._id)}
            >
              Remove member
            </Button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

GroupMemberItem.propTypes = {
  member: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  group: PropTypes.object.isRequired,
  removeMemberFromGroup: PropTypes.func.isRequired
};

export default connect(null, {
  removeMemberFromGroup
})(GroupMemberItem);
