import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Link } from 'react-router-dom';

const GroupRequestItem = ({ request }) => {
  return (
    <Fragment>
      <div className='profile my-3 p-3'>
        <Link to={`/profile/${request._id}`}>
          <img src={request.avatar} alt='' className='round-img' />
        </Link>

        <div className='profile-info'>
          <h2>{request.name}</h2>
        </div>
      </div>
    </Fragment>
  );
};

GroupRequestItem.propTypes = {
  request: PropTypes.object.isRequired
};

export default GroupRequestItem;
