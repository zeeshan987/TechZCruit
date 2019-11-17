import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostById } from '../../actions/post';
import Spinner from '../layout/Spinner';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = ({ post, getPostById, match, auth }) => {
  useEffect(() => {
    getPostById(match.params.id);
  }, [getPostById, match.params.id]);

  return (
    <Fragment>
      <div className='row'>
        <div className='col-md-12'>
          <Link to='/posts' className='btn btn-light my-3'>
            Back to posts
          </Link>
        </div>
      </div>

      {post === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <div className='row post p-3 my-3'>
            <div className='col-md-3'>
              <Link to={`/profile/${post.user._id}`}>
                <img src={post.user.avatar} alt='' className='round-img' />
                <p className='text-primary my-1'>
                  <strong>{post.user.name}</strong>
                </p>
              </Link>
            </div>
            <div className='col-md-9'>
              <div>
                <p>{post.description}</p>
              </div>
            </div>
          </div>
          <CommentForm post={post} />
          {post.comments.map(comment => (
            <div key={comment._id}>
              <CommentItem comment={comment} auth={auth} postId={post._id} />
            </div>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  getPostById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post.post,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getPostById
})(Post);
