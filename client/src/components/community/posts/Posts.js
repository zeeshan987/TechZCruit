import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllPosts } from '../../../actions/community/post';
import PostForm from './PostForm';
// import PostItem from './PostItem';

const Posts = ({ getAllPosts, post: { loading, posts }, auth, group }) => {
  useEffect(() => {
    getAllPosts(group._id);
  }, [getAllPosts]);

  return (
    <Fragment>
      <PostForm />
      {!loading && posts.length > 0 ? (
        posts.map(post => (
          <div key={post._id}>{/* <PostItem post={post} auth={auth} /> */}</div>
        ))
      ) : (
        <div className='lead my-3'>No posts found</div>
      )}
    </Fragment>
  );
};

Posts.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  group: PropTypes.object.isRequired
};

export default connect(null, {
  getAllPosts
})(Posts);
