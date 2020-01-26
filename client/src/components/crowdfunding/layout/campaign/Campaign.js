import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getCampaignById } from "../../../../actions/crowdfunding/campaign";
import Spinner from "../../../../components/layout/Spinner";
import { connect } from "react-redux";
// import { getCampaignById } from "../../../../actions/crowdfunding/campaign";
import square2 from "../../../../img/square2.jpeg";
import Navlinks from "./Navlinks";
import TeamProfile from "./TeamProfile";

const Campaign = ({ campaign, getCampaignById, match, auth }) => {
  useEffect(() => {
    getCampaignById(match.params.id);
  }, [getCampaignById, match.params.id]);
  return (
    <Fragment>
      {campaign === null ? (
        <Spinner />
      ) : (
        <Fragment>
          {/* Slim Navabr for about comment votes */}
          <div className='my-3'>
            <div className='col-md-12'>
              <div className='row'>
                <div className='col-md-12'>
                  <h2 className='text-primary'>{campaign.campaignTitle}</h2>
                </div>
              </div>
            </div>  
          </div>
          <div className='row' style={{ backgroundColor: "#ffffff" }}>
            {/* campaign pic */}

            <div className='col-md-6'>
              <div className='row'>
                <div className='col-md-12'>
                  <img src={square2} alt='campaign pic ' />
                </div>
              </div>
            </div>

            {/* discription on right */}
            <div
              className='box-3 col-md-6'
              style={{ background: "rgba(204, 204, 204, 0.63)" }}
            >
              <div className='row'>
                <div className='col-md-12'>
                  <h2 className='text-primary'>
                    <strong>${campaign.fundsRequired}</strong>
                  </h2>
                  <small>pledged of $51,709 goal</small>
                </div>
              </div>
              <div className='row edu'>
                <div className='col-md-12'>
                  <div>
                    <h3 className='text-primary'>
                      <strong>16,919</strong>
                    </h3>
                    <small>backers</small>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div>
                    <h3 className='text-primary'>
                      <strong>{campaign.timeRequired}</strong>
                    </h3>
                    <small>Last data of campaign ends</small>
                  </div>
                </div>
                <div className='buttons'>
                  <Link
                    to='/#'
                    className='btn btn-primary'
                    style={{ marginLeft: "15px" }}
                  >
                    Suppport this Project
                  </Link>
                </div>
                {/* Vote */}
                <div className='col-md-12 my-1'>
                  <button className='btn btn-dark'>
                    <i className='fas fa-heart'></i> <span>1</span>
                  </button>
                  {/* <button
                    className='btn btn-dark'
                    onClick={() => unlikePost(_id)}
                  >
                    <i className='fas fa-heart'></i>`
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div className='campaign-box'>
            <div className='cambox-1'>
              <Navlinks campaign={campaign} auth={auth} />
            </div>
            <div className='cambox-2'>
              <TeamProfile campaign={Campaign}/>
            </div>
          </div>
          {/* user and ites teams memmbers on right side */}
        </Fragment>
      )}
    </Fragment>
  );
};

Campaign.propTypes = {
  campaign: PropTypes.object.isRequired,
  getCampaignById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  campaign: state.campaign.campaign,
  auth: state.campaign.auth
});
export default connect(mapStateToProps, { getCampaignById })(Campaign);
