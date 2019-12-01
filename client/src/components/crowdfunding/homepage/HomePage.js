import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Carousal from '../layout/Carousal';
// import homeimg from '../../../img/c1.jpg';
import square1 from '../../../img/square1.jpg';
import square2 from '../../../img/square2.jpeg';
import square3 from '../../../img/square3.jpeg';
import square4 from '../../../img/square4.jpeg';
import HomePageTop from './HomePageTop';

const HomePage = props => {
  return (
    <Fragment>
      <HomePageTop />
      <div>
        {/* <div>
          <img src={homeimg} alt='' />
        </div> */}
        <div className='box box-2'>
          <div style={{ paddingLeft: '11px' }}>
            <h1>Popular Projects</h1>
            <hr />
          </div>
          <div className='cardsrow'>
            <Carousal />
          </div>
        </div>
        <div className='box box-3'>
          <h1>Collection</h1>
          <hr />
          <div className='wrapper'>
            <div>
              <div className='align-text'>
                <div className='text-centered'>10 Cool & Clever Finds</div>
                <img src={square1} className='card-img-top' alt='...' />
              </div>
              <h3>Our roundup of standout projects</h3>
            </div>
            <div>
              <div className='align-text'>
                <div className='text-centered'>Team Favorite</div>
                <img src={square4} className='card-img-top' alt='...' />
              </div>
              <h3>Most Liked projects</h3>
            </div>
            <div>
              <div className='align-text'>
                <div className='text-centered'>10 Cool & Clever Finds</div>
                <img src={square3} className='card-img-top' alt='...' />
              </div>
              <h3>Campaigns just launched and are gaining traction</h3>
            </div>
            <div>
              <div className='align-text'>
                <div className='text-centered'>10 Cool & Clever Finds</div>
                <img src={square2} className='card-img-top' alt='...' />
              </div>
              <h3>Campaigns with perks one step closer to shipping</h3>
            </div>
          </div>
        </div>
        <div className='box box-4'>
          <div className='head'>
            <h1>Clever Things For Curious Humans™</h1>
          </div>
          <div className='parag-text'>
            <p>
              There’s no better place to start the hunt for something new and
              special. Begin on TechCZruit to find clever and unconventional
              things that solve everyday problems large and small.
            </p>
          </div>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
