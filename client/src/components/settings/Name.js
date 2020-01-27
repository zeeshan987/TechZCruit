import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form } from 'react-bootstrap';

const Name = props => {
  return (
    <Fragment>
      <Row>
        <Col md={12}>
          <div className='lead'>Name</div>
          <Form>
            <Form.Group>
              <Form.Control value='John Doe' />
            </Form.Group>
            <Button variant='primary'>Update name</Button>
          </Form>
          <hr />
        </Col>
      </Row>
    </Fragment>
  );
};

Name.propTypes = {};

export default Name;
