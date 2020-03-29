import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MyConversationItem = ({ conversation: { _id, users }, styles, auth }) => {
  return (
    <Fragment>
      <Row className={styles.list_item}>
        <Col md={2}>
          <Link
            to={`/profile/${
              users.filter(item => item.user._id !== auth.user._id)[0].user._id
            }`}
          >
            <img
              src={
                users.filter(item => item.user._id !== auth.user._id)[0].user
                  .avatar
              }
              alt=''
              className='round-img'
            />
          </Link>
        </Col>
        <Col md={10}>
          <Link to={`/conversation/${_id}`}>
            <h2>
              {
                users.filter(item => item.user._id !== auth.user._id)[0].user
                  .name
              }
            </h2>
          </Link>
        </Col>
      </Row>
    </Fragment>
  );
};

MyConversationItem.propTypes = {
  conversation: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

export default MyConversationItem;
