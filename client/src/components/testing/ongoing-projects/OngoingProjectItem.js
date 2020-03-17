import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { finishTestingForProject } from '../../../actions/testing/project';

const OngoingProjectItem = ({
  project: { _id, name, description },
  finishTestingForProject,
  styles
}) => {
  return (
    <Fragment>
      <Row className={styles.list_item}>
        <Col md={12}>
          <Link to={`/testing/project/${_id}`} className={styles.group_name}>
            {name}
          </Link>
          <div className='mt-2'>{description}</div>
          <div className='mt-2'>
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
  finishTestingForProject: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

export default connect(null, {
  finishTestingForProject
})(OngoingProjectItem);
