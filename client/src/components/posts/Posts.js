import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllPosts } from "../../actions/post";
import PostForm from "./PostForm";
import PostItem from "./PostItem";

const Posts = ({ getAllPosts, posts, auth }) => {
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
      {posts.length === 0 ? (
        <div className='lead'>No posts found</div>
      ) : (
        posts.map(post => (
          <div key={post._id}>
            <PostItem post={post} auth={auth} />
          </div>
        ))
      )}
    </Fragment>
  );
};

Posts.propTypes = {
  getAllPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.post.posts,
  auth: state.auth
});

export default connect(mapStateToProps, { getAllPosts })(Posts);
