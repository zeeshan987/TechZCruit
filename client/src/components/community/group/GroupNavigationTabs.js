import React, { Fragment } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';

const GroupNavigationTabs = ({ group }) => {
  return (
    <Fragment>
      <Tab.Container defaultActiveKey='posts'>
        <Row>
          <Col md={12}>
            <Nav justify variant='tabs'>
              <Nav.Item>
                <Nav.Link eventKey='posts'>Posts</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='members'>Members</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='requests'>Requests</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Tab.Content>
              <Tab.Pane eventKey='posts'>Posts</Tab.Pane>
              <Tab.Pane eventKey='members'>Members</Tab.Pane>
              <Tab.Pane eventKey='requests'>Requests</Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      {/* <Nav justify variant='tabs'>
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
      </Nav> */}
    </Fragment>
  );
};

GroupNavigationTabs.propTypes = {
  group: PropTypes.object.isRequired
};

export default GroupNavigationTabs;
