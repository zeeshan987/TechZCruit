import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Grid, Container } from 'react-bootstrap';
// import "../../../css/crowdfunding/HomePage.css";
import { connect } from 'react-redux';
import { getAllCampaigns } from '../../../actions/crowdfunding/campaign';
import Card from 'react-bootstrap/Card';
import caro1 from '../../../img/caro1.jpg';
import caro2 from '../../../img/caro2.jpg';
import caro3 from '../../../img/caro3.jpg';
import CarousalItem from './CarousalItem';

function ControlledCarousel({ campaigns, auth }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };
  return (
    <Fragment>
      {/* <CardsGroup /> */}
      {campaigns === null ? (
        <div className='lead'>No campaigns found</div>
      ) : (
        <Carousel
          className='box-2'
          activeIndex={index}
          direction={direction}
          onSelect={handleSelect}
          // fade
          pauseOnHover
          slide
          interval={2000}
        >
          <Carousel.Item>
            <Row>
              {campaigns.map(campaign => (
                <Fragment key={campaign._id}>
                  <CarousalItem campaign={campaign} auth={auth} />
                </Fragment>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      )}
    </Fragment>
  );
}

ControlledCarousel.propTypes = {
  auth: PropTypes.object.isRequired,
  campaigns: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(ControlledCarousel);
