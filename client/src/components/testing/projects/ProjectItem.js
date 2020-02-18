import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import placeholder from '../../../img/placeholder.png';

const ProjectItem = ({ project: { _id, name, description, url, amount } }) => {
  return (
    <Fragment>
      <Col md={3}>
        <Card className='mb-3'>
          <Card.Img variant='top' src={placeholder} />
          <Card.Body>
            <Card.Title>
              <Link
                to={`/testing/project/${_id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {name}
              </Link>
            </Card.Title>
            <Card.Text>
              <div className='text-truncate'>{description}</div>
              <div>
                <strong>URL: </strong>
                <a href={url} className='text-truncate'>
                  {url}
                </a>
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div>
              <strong>Amount: </strong>${amount}
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </Fragment>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectItem;
