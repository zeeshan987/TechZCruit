import React, { Fragment } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import GroupMembers from './members/GroupMembers';
import GroupRequests from './requests/GroupRequests';

const GroupNavigationTabs = ({ group }) => {
  return (
    <Fragment>
      <Tab.Container defaultActiveKey='requests'>
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
              <Tab.Pane eventKey='members'>
                <GroupMembers group={group} />
              </Tab.Pane>
              <Tab.Pane eventKey='requests'>
                <GroupRequests group={group} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Fragment>
  );
};

GroupNavigationTabs.propTypes = {
  group: PropTypes.object.isRequired
};

export default GroupNavigationTabs;
