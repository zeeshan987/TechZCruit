import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  deleteOfferForProject,
  addTesterToProject
} from '../../../actions/testing/project';

const ProjectOffers = ({
  project: { _id, offers },
  deleteOfferForProject,
  addTesterToProject
}) => {
  return (
    <Fragment>
      {offers.map(offer => (
        <Row className='post p-3 my-3'>
          <Col md={3}>
            <Link to={`/profile/${offer.user._id}`}>
              <img src={offer.user.avatar} alt='' className='round-img' />
            </Link>
          </Col>
          <Col md={9}>
            <div className='text-primary lead'>{offer.user.name}</div>
            <div>
              <strong>Amount: </strong>${offer.amount}
            </div>
            <div className='my-2'>
              <Button
                variant='success'
                onClick={() => {
                  addTesterToProject(_id, offer.user._id);
                  deleteOfferForProject(_id, offer._id);
                }}
              >
                Accept
              </Button>
              <Button
                variant='danger'
                onClick={() => deleteOfferForProject(_id, offer._id)}
              >
                Reject
              </Button>
            </div>
          </Col>
        </Row>
      ))}
    </Fragment>
  );
};

ProjectOffers.propTypes = {
  project: PropTypes.object.isRequired,
  deleteOfferForProject: PropTypes.func.isRequired,
  addTesterToProject: PropTypes.func.isRequired
};

export default connect(null, {
  deleteOfferForProject,
  addTesterToProject
})(ProjectOffers);
