import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyCampaignItem = ({ campaign }) => {
  return (
    <Fragment>
      <Row className='post p-3 my-3'>
        <Col md={12}>
          <h2>
            <Link
              to={`/crowdfunding/campaign/${campaign._id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {campaign.title}
            </Link>
          </h2>
          <p>{campaign.description}</p>
          <div>
            <strong>Funds raised:</strong>{' '}
            {Math.round(
              (campaign.supporters
                .map(supporter => supporter.amount)
                .reduce((a, b) => a + b, 0) /
                campaign.fundsRequired) *
                100
            )}
            {'%'}
          </div>
          <div className='my-2'>
            <Button
              variant='success'
              href={`/crowdfunding/edit-campaign/${campaign._id}`}
            >
              Update campaign
            </Button>
            <Button variant='danger'>Delete campaign</Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

MyCampaignItem.propTypes = {
  campaign: PropTypes.func.isRequired
};

export default MyCampaignItem;
