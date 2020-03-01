import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GroupRequestItem from './GroupRequestItem';

const GroupRequests = ({ group, styles }) => {
  return (
    <Fragment>
      {group !== null && group.requests.length > 0 ? (
        group.requests.map(request => (
          <GroupRequestItem
            key={request._id}
            request={request}
            groupId={group._id}
            styles={styles}
          />
        ))
      ) : (
        <div className='lead my-3'>No requests found</div>
      )}
    </Fragment>
  );
};

GroupRequests.propTypes = {
  group: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired
};

export default GroupRequests;
