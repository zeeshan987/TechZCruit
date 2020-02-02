import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { deleteComment } from '../../../../../actions/post';
import card1 from '../../../../img/square2.jpeg';

// import ProfileTop from "../../../../components/profile/ProfileTop";
const CommentItem = (comment, auth, campaignId) => {
  return (
    <Fragment>
      <h2 className='text-primary'>Comments</h2>
      {/* post comment */}

      <div class='row post p-3'>
        <div class='col-md-3'>
          <Link to={`/profile/${comment.user._id}`}>
            <img src={comment.user.avatar} alt='' className='round-img' />
            <p className='text-primary my-1'>
              <strong>{comment.user.name}</strong>
            </p>
          </Link>
        </div>
        <div class='col-md-9'>
          <div>
            <p>{comment.description}</p>
          </div>
          <div className='my-1'>
            {auth.user._id === comment.user._id && (
              <button
                className='btn btn-danger'
                // onClick={() => deleteComment(postId, comment._id)}
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
  // deleteComment: PropTypes.func.isRequired,
  campaignId: PropTypes.string.isRequired
};

export default connect(null, {})(CommentItem);
