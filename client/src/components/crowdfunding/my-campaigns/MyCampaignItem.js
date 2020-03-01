import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteCampaign } from '../../../actions/crowdfunding/campaign';

const MyCampaignItem = ({
  campaign: { _id, title, description, supporters, fundsRequired },
  deleteCampaign,
  styles
}) => {
  return (
    <Fragment>
      <Row className={styles.list_item}>
        <Col md={12}>
          <Link
            to={`/crowdfunding/campaign/${_id}`}
            className={styles.group_name}
          >
            {title}
          </Link>
          <div className='mt-2'>{description}</div>
          <div className='mt-2'>
            <strong>Funds raised:</strong>{' '}
            {Math.round(
              (supporters
                .map(supporter => supporter.amount)
                .reduce((a, b) => a + b, 0) /
                fundsRequired) *
                100
            )}
            {'%'}
          </div>
          <div className='mt-2'>
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
  deleteCampaign: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

export default connect(null, {
  deleteCampaign
})(MyCampaignItem);
