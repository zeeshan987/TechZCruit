import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  deletePost,
  likePost,
  unlikePost
} from '../../../actions/community/post';
import { Row, Col, Button } from 'react-bootstrap';

const PostItem = ({
  post: { _id, user, description, likes },
  auth,
  deletePost,
  likePost,
  unlikePost
}) => {
  return (
    <Fragment>
      <Row className='post p-3 my-3'>
        <Col md={3}>
          <a href='profile.html'>
            <img src={user.avatar} alt='' className='round-img' />
            <p className='text-primary my-1'>
              <strong>{user.name}</strong>
            </p>
          </a>
        </Col>
        <Col md={9}>
          <div>
            <p>{description}</p>
          </div>
          <div className='my-1'>
            <Button variant='dark' onClick={() => likePost(_id)}>
              <i className='fas fa-thumbs-up'></i>{' '}
              <span>{likes.length > 0 ? likes.length : ''}</span>
            </Button>
            <Button variant='dark' onClick={() => unlikePost(_id)}>
              <i className='fas fa-thumbs-down'></i>
            </Button>
            <Link to={`/community/post/${_id}`} className='btn btn-dark'>
              View Post
            </Link>
            {auth.user._id === user._id && (
              <button
                className='btn btn-danger'
                onClick={() => deletePost(_id)}
              >
                Delete post
              </button>
            )}
          </div>
        </Col>
      </Row>
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
