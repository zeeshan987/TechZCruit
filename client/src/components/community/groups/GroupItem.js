import React, { Fragment } from 'react';
import { Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { sendJoinRequest } from '../../../actions/community/group';
import { connect } from 'react-redux';
import placeholder from '../../../img/placeholder.png';

const GroupItem = ({ group, auth, sendJoinRequest, styles }) => {
  return (
    <Fragment>
      <Col md={3}>
        <Card className={styles.card}>
          <Card.Body>
            <Card.Img src={placeholder} />
            <Card.Title className={`${styles.card_title} text-truncate`}>
              <Link
                to={`/community/group/${group._id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {group.name}
              </Link>
            </Card.Title>
            <Card.Text>
              <div className='text-truncate my-2'>{group.description}</div>
              <div>
                <strong>Members:</strong> {group.members.length + 1}
              </div>
            </Card.Text>
            {auth.user !== null &&
              group.admin !== auth.user._id &&
              group.requests
                .map(request => request.user)
                .indexOf(auth.user._id) === -1 &&
              group.members
                .map(member => member.user)
                .indexOf(auth.user._id) === -1 && (
                <Card.Footer>
                  <Button
                    variant='dark'
                    className='my-2'
                    onClick={() => sendJoinRequest(group._id)}
                  >
                    <i className='far fa-envelope'></i> Send Join Request
                  </Button>
                </Card.Footer>
              )}
          </Card.Body>
        </Card>
      </Col>
    </Fragment>
  );
};

GroupItem.propTypes = {
  group: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  sendJoinRequest: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

export default connect(null, {
  sendJoinRequest
})(GroupItem);
