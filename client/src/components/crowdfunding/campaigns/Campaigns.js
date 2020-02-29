import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form, Row, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {
  getAllCampaigns,
  searchCampaign
} from "../../../actions/crowdfunding/campaign";
import CampaignItem from "./CampaignItem";

const Campaigns = ({
  getAllCampaigns,
  campaign: { loading, campaigns },
  searchCampaign
}) => {
  useEffect(() => {
    getAllCampaigns();
  }, [getAllCampaigns]);

  const [formData, setFormData] = useState({
    description: ""
  });

  const { description } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (description === "") {
      getAllCampaigns();
    } else {
      searchCampaign(description);
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Crowdfunding</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Support a campaign or acquire funding
        for your own campaigns
      </p>
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group>
          <Form.Control
            type='text'
            name='description'
            value={description}
            placeholder='Search campaigns'
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Button type='submit' hidden />
        </Form.Group>
      </Form>
      <Row>
        {!loading && campaigns.length > 0 ? (
          campaigns.map(campaign => (
            <CampaignItem key={campaign._id} campaign={campaign} />
          ))
        ) : (
          <div className='lead'>No campaigns found</div>
        )}
      </Row>
    </Fragment>
  );
};

Campaigns.propTypes = {
  getAllCampaigns: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  searchCampaign: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  campaign: state.campaign
});

export default connect(mapStateToProps, {
  getAllCampaigns,
  searchCampaign
})(Campaigns);
