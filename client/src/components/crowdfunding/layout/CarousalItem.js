import React, { Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import { Row, Col, Grid, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import caro1 from "../../../img/caro1.jpg";
import caro2 from "../../../img/caro2.jpg";
import caro3 from "../../../img/caro3.jpg";
import PropTypes from "prop-types";

const CarousalItem = ({ campaign, auth }) => {
  return (
    <Fragment>
      <Col md={3}>
        <Card>
          <Card.Img variant='top' src={caro1} />
          <Card.Body>
            <Card.Title className='text-primary'>
              {campaign.campaignTitle}
            </Card.Title>
            <Card.Text>{campaign.campaignDescription}</Card.Text>
            <Link to={`/crowdfunding/campaign/${campaign._id}`}>
              View Details
            </Link>
          </Card.Body>
          <Card.Footer>
            <small className='text-muted'>{campaign.timeRequired}</small>
          </Card.Footer>
        </Card>
      </Col>
    </Fragment>
  );
};

CarousalItem.propTypes = {
  campaign: PropTypes.object.isRequired
};

export default CarousalItem;
