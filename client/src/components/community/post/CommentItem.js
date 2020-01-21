import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteComment } from '../../../actions/community/post';
import { Row, Col } from 'react-bootstrap';

const CommentItem = ({ comment, auth, deleteComment, postId }) => {
  return (
    <Fragment>
      <Row className='post p-3 my-3'>
        <Col md={3}>
          <Link to={`/profile/${comment.user._id}`}>
            <img src={comment.user.avatar} alt='' className='round-img' />
            <p className='text-primary my-1'>
              <strong>{comment.user.name}</strong>
            </p>
          </Link>
        </Col>
        <Col md={9}>
          <p>{comment.description}</p>
          <div className='my-1'>
            {auth.user._id === comment.user._id && (
              <button
                className='btn btn-danger'
                onClick={() => deleteComment(postId, comment._id)}
              >
                Delete comment
              </button>
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
  deleteComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired
};

export default connect(null, {
  deleteComment
})(CommentItem);
