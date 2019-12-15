import React, { Fragment } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteGroup } from '../../../actions/community/group';

const MyGroupItem = ({ group, deleteGroup }) => {
  return (
    <Fragment>
      <Row className='post p-3 my-3'>
        <Col md={12}>
          <h2>{group.name}</h2>
          <p>{group.description}</p>
          <div>
            <strong>Members:</strong> {group.members.length}
          </div>
          <div className='my-2'>
            <Button
              variant='success'
              href={`/community/edit-group/${group._id}`}
            >
              Update group
            </Button>
            <Button variant='danger' onClick={() => deleteGroup(group._id)}>
              Delete group
            </Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

MyGroupItem.propTypes = {
  group: PropTypes.object.isRequired,
  deleteGroup: PropTypes.func.isRequired
};

export default connect(null, {
  deleteGroup
})(MyGroupItem);
