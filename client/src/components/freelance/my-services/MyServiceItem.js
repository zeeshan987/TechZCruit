import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProject } from '../../../actions/testing/project';

const MyServiceItem = ({
  service: { _id, title, description },
  deleteservice,
  styles
}) => {
  return (
    <Fragment>
      <Row className={styles.list_item}>
        <Col md={12}>
          <Link to={`/testing/service/${_id}`} className={styles.group_name}>
            {title}
          </Link>
          <div className='mt-2'>{description}</div>
          <div className='mt-2'>
            <Button variant='dark' href={`/testing/service/stats/${_id}`}>
              View stats
            </Button>
            <Button variant='success' href={`/testing/edit-service/${_id}`}>
              Update service
            </Button>
            <Button variant='danger' onClick={() => deleteservice(_id)}>
              Delete service
            </Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

MyServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
  deleteProject: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

export default connect(null, {
  deleteProject
})(MyServiceItem);
