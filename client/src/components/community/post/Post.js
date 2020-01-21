import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostById } from '../../../actions/community/post';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';
import { Row, Col } from 'react-bootstrap';

const Post = ({ post: { post, loading }, getPostById, match, auth }) => {
  useEffect(() => {
    getPostById(match.params.id);
  }, [getPostById, match.params.id]);

  return (
    <Fragment>
      {!loading && post !== null && (
        <Fragment>
          <Row className='post p-3 my-3'>
            <Col md={3}>
              <Link to={`/profile/${post.user._id}`}>
                <img src={post.user.avatar} alt='' className='round-img' />
                <p className='text-primary my-1'>
                  <strong>{post.user.name}</strong>
                </p>
              </Link>
            </Col>
            <Col md={9}>
              <p>{post.description}</p>
            </Col>
          </Row>
          <CommentForm post={post} />
          {post.comments.length > 0 ? (
            post.comments.map(comment => (
              <div key={comment._id}>
                <CommentItem comment={comment} auth={auth} post={post} />
              </div>
            ))
          ) : (
            <div className='lead my-3'>No comments found</div>
          )}
          {}
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
  post: state.post,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getPostById
})(Post);
