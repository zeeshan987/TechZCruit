import React, { Fragment } from 'react';
import topImage from '../../../img/topImage.jpg';

const HomePageTop = () => {
  return (
    <Fragment>
      <img
        src={topImage}
        style={{ width: '100%', margin: 'auto', display: 'block' }}
        alt=''
      />
    </Fragment>
  );
};

export default HomePageTop;
