import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllPosts } from '../../actions/post';
import PostForm from './PostForm';
import PostItem from './PostItem';

const Posts = ({ getAllPosts, post: { loading, posts }, auth }) => {
  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Posts</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Below is the list of all the posts
      </p>
      <PostForm />
      {!loading && posts.length > 0 ? (
        posts.map(post => (
          <div key={post._id}>
            <PostItem post={post} auth={auth} />
          </div>
        ))
      ) : (
        <div className='lead'>No posts found</div>
      )}
    </Fragment>
  );
};

Posts.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, { getAllPosts })(Posts);
