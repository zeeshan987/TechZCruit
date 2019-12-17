import React, { Fragment } from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

const GroupNavigationTabs = ({ group }) => {
  return (
    <Fragment>
      <Nav justify variant='tabs'>
        <Nav.Item>
          <Nav.Link
            href={`/community/group/${group !== null ? group._id : ''}`}
          >
            Posts
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Members</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Requests</Nav.Link>
        </Nav.Item>
      </Nav>
    </Fragment>
  );
};

GroupNavigationTabs.propTypes = {
  group: PropTypes.object.isRequired
};

export default GroupNavigationTabs;
