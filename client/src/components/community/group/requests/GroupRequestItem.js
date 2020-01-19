import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const GroupRequestItem = ({ request: { user } }) => {
  return (
    <Fragment>
      <div className='profile my-3 p-3'>
        <Link to={`/profile/${user._id}`}>
          <img src={user.avatar} alt='' className='round-img' />
        </Link>

        <div className='profile-info'>
          <h2>{user.name}</h2>
          <Button variant='danger' className='my-2'>
            Delete request
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

GroupRequestItem.propTypes = {
  request: PropTypes.object.isRequired
};

export default GroupRequestItem;
