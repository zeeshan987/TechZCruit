import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form } from 'react-bootstrap';

const Name = ({ auth: { user } }) => {
  return (
    <Fragment>
      <Row>
        <Col md={12}>
          <div className='lead'>Name</div>
          <Form>
            <Form.Group>
              <Form.Control value={user !== null ? user.name : ''} />
            </Form.Group>
            <Button variant='primary'>Update name</Button>
          </Form>
          <hr />
        </Col>
      </Row>
    </Fragment>
  );
};

Name.propTypes = {
  auth: PropTypes.object.isRequired
};

export default Name;
