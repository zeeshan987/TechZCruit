import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { finishTestingForProject } from '../../../actions/testing/project';

const OngoingProjectItem = ({
  project: { _id, name, description },
  finishTestingForProject
}) => {
  return (
    <Fragment>
      <Row className='post p-3 my-3'>
        <Col md={12}>
          <h2>
            <Link
              to={`/testing/project/${_id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {name}
            </Link>
          </h2>
          <p>{description}</p>
          <div className='my-2'>
            <Button
              variant='primary'
              href={`/testing/ongoing-project/testcases/${_id}`}
            >
              Manage test cases
            </Button>
            <Button
              variant='success'
              onClick={() => finishTestingForProject(_id)}
            >
              Finish testing
            </Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

OngoingProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  finishTestingForProject: PropTypes.func.isRequired
};

export default connect(null, {
  finishTestingForProject
})(OngoingProjectItem);
