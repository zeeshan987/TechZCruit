import React, { Fragment } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MyGroupItem = ({ group }) => {
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
            <Button variant='success'>Update group</Button>
            <Button variant='danger'>Delete group</Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

MyGroupItem.propTypes = {
  group: PropTypes.object.isRequired
};

export default MyGroupItem;
