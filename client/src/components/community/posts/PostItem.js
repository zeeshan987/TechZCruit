import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost, likePost, unlikePost } from '../../actions/post';

const PostItem = ({
  post: { _id, user, description, likes },
  auth,
  deletePost,
  likePost,
  unlikePost
}) => {
  return (
    <Fragment>
      <div className='row post p-3 my-3'>
        <div className='col-md-3'>
          <a href='profile.html'>
            <img src={user.avatar} alt='' className='round-img' />
            <p className='text-primary my-1'>
              <strong>{user.name}</strong>
            </p>
          </a>
        </div>
        <div className='col-md-9'>
          <div>
            <p>{description}</p>
          </div>
          <div className='my-1'>
            <button className='btn btn-dark' onClick={() => likePost(_id)}>
              <i className='fas fa-thumbs-up'></i>{' '}
              <span>{likes.length > 0 ? likes.length : ''}</span>
            </button>
            <button className='btn btn-dark' onClick={() => unlikePost(_id)}>
              <i className='fas fa-thumbs-down'></i>
            </button>
            <Link to={`/post/${_id}`} className='btn btn-dark'>
              View Post
            </Link>
            {auth.user._id === user._id && (
              <button
                className='btn btn-danger'
                onClick={() => deletePost(_id)}
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

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  likePost: PropTypes.func.isRequired,
  unlikePost: PropTypes.func.isRequired
};

export default connect(null, {
  deletePost,
  likePost,
  unlikePost
})(PostItem);
