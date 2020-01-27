import React, { Fragment } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { sendJoinRequest } from '../../../actions/community/group';
import { connect } from 'react-redux';

const GroupItem = ({ group, auth, sendJoinRequest }) => {
  return (
    <Fragment>
      <Row className='post p-3 my-3'>
        <Col md={12}>
          <h2>
            <Link
              to={`/community/group/${group._id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {group.name}
            </Link>
          </h2>
          <p>{group.description}</p>
          <div>
            <strong>Members:</strong> {group.members.length + 1}
          </div>
          {auth.user !== null &&
            group.admin !== auth.user._id &&
            group.requests
              .map(request => request.user)
              .indexOf(auth.user._id) === -1 &&
            group.members.map(member => member.user).indexOf(auth.user._id) ===
              -1 && (
              <Button
                variant='dark'
                className='my-2'
                onClick={() => sendJoinRequest(group._id)}
              >
                <i className='far fa-envelope'></i> Send Join Request
              </Button>
            )}
        </Col>
      </Row>
    </Fragment>
  );
};

GroupItem.propTypes = {
  group: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  sendJoinRequest: PropTypes.func.isRequired
};

export default connect(null, {
  sendJoinRequest
})(GroupItem);
