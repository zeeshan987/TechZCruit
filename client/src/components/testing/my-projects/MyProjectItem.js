import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProject } from '../../../actions/testing/project';

const MyProjectItem = ({
  project: { _id, name, description },
  deleteProject,
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
              href={`/testing/project/testcases/${_id}`}
            >
              Manage test cases
            </Button>
            <Button variant='dark' href={`/testing/project/stats/${_id}`}>
              View stats
            </Button>
            <Button variant='success' href={`/testing/edit-project/${_id}`}>
              Update project
            </Button>
            <Button variant='danger' onClick={() => deleteProject(_id)}>
              Delete project
            </Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

MyProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  deleteProject: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

export default connect(null, {
  deleteProject
})(MyProjectItem);
