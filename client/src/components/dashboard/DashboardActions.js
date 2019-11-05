import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <Fragment>
      <div className='dash-buttons my-2'>
        <Link to='/edit-profile' className='btn btn-light'>
          <i className='fas fa-user-circle'></i> Edit Profile
        </Link>
        <Link to='/add-experience' className='btn btn-light'>
          <i className='fab fa-black-tie'></i> Add Experience
        </Link>
        <Link to='/add-education' className='btn btn-light'>
          <i className='fas fa-book'></i> Add Education
        </Link>
      </div>
    </Fragment>
  );
};

export default DashboardActions;
