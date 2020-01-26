import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import CommentItem from "./comment/CommentItem";
import CommentForm from "./comment/CommentForm";
import ProjectStory from "./ProjectStory";

const Navlinks = ({ campaign, auth }) => {
  return (
    <Fragment>
      <div className='link-container'>
        <Tabs
          className='navlink'
          defaultActiveKey='home'
          id='uncontrolled-tab-example'
        >
          <Tab eventKey='home' title='Story'>
            <ProjectStory campaign={campaign} auth={auth} />
          </Tab>
          <Tab eventKey='profile' title='Comment'>
            <CommentForm campaign={campaign} />
            {/* <CommentItem campaign={campaign}/> */}
            {campaign.comments.map(comment => (
              <div key={comment._id}>
                <CommentItem
                  comment={comment}
                  auth={auth}
                  campaignId={campaign._id}
                />
              </div>
            ))}
          </Tab>
        </Tabs>
      </div>
    </Fragment>
  );
};

Navlinks.propTypes = {
  campaign: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default Navlinks;
