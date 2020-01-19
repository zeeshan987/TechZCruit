import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GroupMemberItem from './GroupMemberItem';

const GroupMembers = ({ group }) => {
  return (
    <Fragment>
      {group !== null ? (
        <GroupMemberItem member={group.admin} isAdmin={true} />
      ) : (
        'Loading...'
      )}
      {group !== null
        ? group.members.map(member => (
            <GroupMemberItem member={member} isAdmin={false} />
          ))
        : ''}
    </Fragment>
  );
};

GroupMembers.propTypes = {
  group: PropTypes.object.isRequired
};

export default GroupMembers;
