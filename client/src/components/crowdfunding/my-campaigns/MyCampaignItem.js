import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteCampaign } from "../../../actions/crowdfunding/campaign";

const MyCampaignItem = ({
  campaign: { _id, title, description, supporters, fundsRequired },
  deleteCampaign
}) => {
  return (
    <Fragment>
      <Row className='post p-3 my-3'>
        <Col md={12}>
          <h2>
            <Link
              to={`/crowdfunding/campaign/${_id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {title}
            </Link>
          </h2>
          <p>{description}</p>
          <div>
            <strong>Funds raised:</strong>{" "}
            {Math.round(
              (supporters
                .map(supporter => supporter.amount)
                .reduce((a, b) => a + b, 0) /
                fundsRequired) *
                100
            )}
            {"%"}
          </div>
          <div className='my-2'>
            <Button
              variant='success'
              href={`/crowdfunding/edit-campaign/${_id}`}
            >
              Update campaign
            </Button>
            <Button variant='danger' onClick={() => deleteCampaign(_id)}>
              Delete campaign
            </Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

MyCampaignItem.propTypes = {
  campaign: PropTypes.object.isRequired,
  deleteCampaign: PropTypes.func.isRequired
};

export default connect(null, {
  deleteCampaign
})(MyCampaignItem);
