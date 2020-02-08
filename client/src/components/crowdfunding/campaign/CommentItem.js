import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { deleteCommentOnCampaign } from '../../../actions/crowdfunding/campaign';

const CommentItem = ({ comment, auth, campaign, deleteCommentOnCampaign }) => {
  return (
    <Fragment>
      <Row className='post p-3 my-3'>
        <Col md={3}>
          <Link to={`/profile/${comment.user._id}`}>
            <img
              src={comment.user.avatar}
              alt=''
              className='round-img'
              style={{ width: '150px', height: '150px' }}
            />
            <p className='text-primary my-1'>
              <strong>{comment.user.name}</strong>
            </p>
          </Link>
        </Col>
        <Col md={9}>
          <p>{comment.description}</p>
          <div>
            {auth.user !== null &&
              (auth.user._id === campaign.user._id ||
                auth.user._id === comment.user._id) && (
                <Button
                  variant='danger'
                  onClick={() =>
                    deleteCommentOnCampaign(campaign._id, comment._id)
                  }
                >
                  Delete comment
                </Button>
              )}
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  campaign: PropTypes.object.isRequired,
  deleteCommentOnCampaign: PropTypes.func.isRequired
};

export default connect(null, {
  deleteCommentOnCampaign
})(CommentItem);
