import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

const ProjectOffers = ({ offers }) => {
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
              <Button variant='success'>Accept</Button>
              <Button variant='danger'>Reject</Button>
            </div>
          </Col>
        </Row>
      ))}
    </Fragment>
  );
};

ProjectOffers.propTypes = {
  offers: PropTypes.array.isRequired
};

export default ProjectOffers;
