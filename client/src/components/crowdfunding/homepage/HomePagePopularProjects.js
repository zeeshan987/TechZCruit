import React, { Fragment } from 'react';
import Carousal from '../layout/Carousal';

const HomePagePopularProjects = () => {
  return (
    <Fragment>
      <h1 className='my-3'>Popular Projects</h1>
      <hr />
      <div className='cardsrow'>
        <Carousal />
      </div>
    </Fragment>
  );
};

export default HomePagePopularProjects;
