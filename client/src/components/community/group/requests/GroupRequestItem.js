import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  deleteJoinRequest,
  addMemberToGroup
} from '../../../../actions/community/group';

const GroupRequestItem = ({
  request: { _id, user },
  deleteJoinRequest,
  groupId,
  addMemberToGroup
}) => {
  return (
    <Fragment>
      <div className='profile my-3 p-3'>
        <Link to={`/profile/${user._id}`}>
          <img src={user.avatar} alt='' className='round-img' />
        </Link>

        <div className='profile-info'>
          <h2>{user.name}</h2>
          <Button
            variant='success'
            className='my-2'
            onClick={() => {
              addMemberToGroup(groupId, user._id);
              deleteJoinRequest(groupId, _id);
            }}
          >
            Accept Request
          </Button>
          <Button
            variant='danger'
            className='my-2'
            onClick={() => deleteJoinRequest(groupId, _id)}
          >
            Delete request
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

GroupRequestItem.propTypes = {
  request: PropTypes.object.isRequired,
  deleteJoinRequest: PropTypes.func.isRequired,
  groupId: PropTypes.string.isRequired,
  addMemberToGroup: PropTypes.func.isRequired
};

export default connect(null, {
  deleteJoinRequest,
  addMemberToGroup
})(GroupRequestItem);
