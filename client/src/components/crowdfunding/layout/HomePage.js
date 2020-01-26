import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Carousal from "./Carousal";
import HomeCaraosel from "./HomeCaraosel";
import { getAllCampaigns } from "../../../actions/crowdfunding/campaign";
import "../../../css/crowdfunding/HomePage.css";
import square1 from "../../../img/square1.jpg";
import square2 from "../../../img/square2.jpeg";
import square3 from "../../../img/square3.jpeg";
import square4 from "../../../img/square4.jpeg";

const HomePage = ({ getAllCampaigns, campaigns, auth }) => {
  useEffect(() => {
    getAllCampaigns();
  }, [getAllCampaigns]);

  return (
    <Fragment>
      <div className='main-container' style={{ margin: "0px" }}>
        {/* Box 1  */}
        {/* <div className='box box-1'>
          <img src={homeimg} width='100%' alt='' />
        </div> */}
        <HomeCaraosel />
        {/* <!-- Box 2 --> */}
        <div className='box box-2'>
          <div style={{ paddingLeft: "11px" }}>
            <h2 className='text-primary'>Popular Projects</h2>
            <hr />
          </div>
          {/* <Carousal /> */}
          {/* <!-- Card rows --> */}
          <div className='cardsrow'>
            <Carousal campaigns={campaigns} />
          </div>
        </div>
        <div className='box box-3'>
          {/* <!-- Grid --> */}
          <h1>Collection</h1>
          <hr />
          <div className='wrapper'>
            <div>
              <div className='align-text'>
                <div className='text-centered'>10 Cool & Clever Finds</div>
                <img src={square1} className='card-img-top' alt='...' />
              </div>
              <h3>
                <Link to='/crowdfunding/searchcampaign'>
                  Our roundup of standout projects
                </Link>
              </h3>
            </div>
            <div>
              <div className='align-text'>
                <div className='text-centered'>Team Favorite</div>
                <img src={square4} className='card-img-top' alt='...' />
              </div>
              <h3>
                <Link to='/crowdfunding/searchcampaign'>
                  Most Liked projects
                </Link>
              </h3>
            </div>
            <div>
              <div className='align-text'>
                <div className='text-centered'>10 Cool & Clever Finds</div>
                <img src={square3} className='card-img-top' alt='...' />
              </div>
              <h3>
                <Link to='/crowdfunding/searchcampaign'>
                  Campaigns just launched and are gaining traction
                </Link>
              </h3>
            </div>
            <div>
              <div className='align-text'>
                <div className='text-centered'>10 Cool & Clever Finds</div>
                <img src={square2} className='card-img-top' alt='...' />
              </div>
              <h3>
                <Link to='/crowdfunding/searchcampaign'>
                  Campaigns with perks one step closer to shipping
                </Link>
              </h3>
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

HomePage.propTypes = {
  // getAllCampaigns: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  campaigns: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  campaigns: state.campaign.campaigns,
  auth: state.auth
});

export default connect(mapStateToProps, { getAllCampaigns })(HomePage);
