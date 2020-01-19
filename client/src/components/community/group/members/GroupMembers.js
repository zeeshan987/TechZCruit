import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GroupMemberItem from './GroupMemberItem';

const GroupMembers = ({ group }) => {
  return (
    <Fragment>
      {group !== null ? (
        <GroupMemberItem member={group.admin} isAdmin={true} />
      ) : (
        'No members found'
      )}
      {group !== null
        ? group.members.map(member => (
            <GroupMemberItem
              key={member._id}
              member={member.user}
              isAdmin={false}
            />
          ))
        : ''}
    </Fragment>
  );
};

GroupMembers.propTypes = {
  group: PropTypes.object.isRequired
};

export default GroupMembers;
