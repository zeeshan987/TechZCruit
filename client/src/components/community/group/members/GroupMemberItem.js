import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Link } from 'react-router-dom';

const GroupMemberItem = ({ member, isAdmin }) => {
  return (
    <Fragment>
      <div className='profile my-3 p-3'>
        <Link to={`/profile/${member._id}`}>
          <img src={member.avatar} alt='' className='round-img' />
        </Link>

        <div className='profile-info'>
          <h2>{member.name}</h2>
          {isAdmin ? <h5>Admin</h5> : ''}
        </div>
      </div>
    </Fragment>
  );
};

GroupMemberItem.propTypes = {
  member: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool.isRequired
};

export default GroupMemberItem;
