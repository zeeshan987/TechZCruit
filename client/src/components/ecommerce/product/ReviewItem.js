import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { deleteCommentOnCampaign } from '../../../actions/crowdfunding/campaign';

const ReviewItem = ({
  review,
  auth,
  product,
  deleteCommentOnCampaign,
  styles
}) => {
  return (
    <Fragment>
      <Row className={styles.list_item}>
        <Col md={3}>
          <Link to={`/profile/${review.user._id}`}>
            <img src={review.user.avatar} alt='' className='round-img' />
            <div className={styles.user_name}>{review.user.name}</div>
          </Link>
        </Col>
        <Col md={9}>
          <div className='my-3'>{review.description}</div>
          <div>
            {auth.user !== null &&
              (auth.user._id === product.user._id ||
                auth.user._id === review.user._id) && (
                <Button
                  variant='danger'
                  onClick={() =>
                    deleteCommentOnCampaign(product._id, review._id)
                  }
                >
                  Delete review
                </Button>
              )}
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  deleteCommentOnCampaign: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

export default connect(null, {
  deleteCommentOnCampaign
})(ReviewItem);
