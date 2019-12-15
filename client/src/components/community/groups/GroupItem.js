import React, { Fragment } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const GroupItem = ({ group }) => {
  return (
    <Fragment>
      <Row className='post p-3 my-3'>
        <Col md={12}>
          <h2>{group.name}</h2>
          <p>{group.description}</p>
          <div>
            <strong>Members:</strong> {group.members.length}
          </div>
          <Button variant='dark' className='my-2'>
            <i class='far fa-envelope'></i> Send Join Request
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

GroupItem.propTypes = {
  group: PropTypes.object.isRequired
};

export default GroupItem;
