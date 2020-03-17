import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { removeMemberFromGroup } from '../../../../actions/community/group';
import { Row, Col } from 'react-bootstrap';

const GroupMemberItem = ({
  member,
  isAdmin,
  auth,
  group,
  removeMemberFromGroup,
  styles
}) => {
  return (
    <Fragment>
      <Row className={styles.list_item}>
        <Col md={2}>
          <Link to={`/profile/${member._id}`}>
            <img src={member.avatar} alt='' className='round-img' />
          </Link>
        </Col>
        <Col md={10}>
          <h2>{member.name}</h2>
          <div>
            {isAdmin ? <h5>Admin</h5> : ''}
            {auth.user !== null &&
              !isAdmin &&
              auth.user._id === group.admin._id && (
                <Button
                  variant='danger'
                  className='my-2'
                  onClick={() => removeMemberFromGroup(group._id, member._id)}
                >
                  Remove member
                </Button>
              )}
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

GroupMemberItem.propTypes = {
  member: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  auth: PropTypes.object.isRequired,
  group: PropTypes.object.isRequired,
  removeMemberFromGroup: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

export default connect(null, {
  removeMemberFromGroup
})(GroupMemberItem);
