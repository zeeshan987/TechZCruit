import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const ProjectTesters = ({ testers }) => {
  return (
    <Fragment>
      {testers.map(tester => (
        <Row className='post p-3 my-3'>
          <Col md={3}>
            <Link to={`/profile/${tester.user._id}`}>
              <img src={tester.user.avatar} alt='' className='round-img' />
            </Link>
          </Col>
          <Col md={9}>
            <div className='text-primary lead'>{tester.user.name}</div>
            <div>
              <strong>Testing status: </strong>
              {tester.status ? 'Finished' : 'Not finished'}
            </div>
          </Col>
        </Row>
      ))}
    </Fragment>
  );
};

ProjectTesters.propTypes = {
  testers: PropTypes.array.isRequired
};

export default ProjectTesters;
