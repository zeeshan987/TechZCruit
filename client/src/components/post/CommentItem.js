import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/post';

const CommentItem = ({ comment, auth, deleteComment, postId }) => {
  return (
    <Fragment>
      <div className='row post p-3 my-3'>
        <div className='col-md-3'>
          <Link to={`/profile/${comment.user._id}`}>
            <img src={comment.user.avatar} alt='' className='round-img' />
            <p className='text-primary my-1'>
              <strong>{comment.user.name}</strong>
            </p>
          </Link>
        </div>
        <div className='col-md-9'>
          <div>
            <p>{comment.description}</p>
          </div>
          <div className='my-1'>
            {auth.user._id === comment.user._id && (
              <button
                className='btn btn-danger'
                onClick={() => deleteComment(postId, comment._id)}
              >
                X
              </button>
            )}
          </div>
        </div>
      </div>
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
