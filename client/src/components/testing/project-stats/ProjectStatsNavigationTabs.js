import React, { Fragment } from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ProjectTestcases from './ProjectTestcases';
import ProjectTesters from './ProjectTesters';
import ProjectOffers from './ProjectOffers';

const ProjectStatsNavigationTabs = ({ project }) => {
  return (
    <Fragment>
      <Tab.Container defaultActiveKey='testCases'>
        <Row>
          <Col md={12}>
            <Nav justify variant='tabs'>
              <Nav.Item>
                <Nav.Link eventKey='testCases'>Test cases</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='testers'>Testers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='offers'>Offers</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Tab.Content>
              <Tab.Pane eventKey='testCases'>
                {project !== null && project.testCases.length > 0 ? (
                  <ProjectTestcases testCases={project.testCases} />
                ) : (
                  <div className='lead my-3'>No testcases found</div>
                )}
              </Tab.Pane>
              <Tab.Pane eventKey='testers'>
                {project !== null && project.testers.length > 0 ? (
                  <ProjectTesters testers={project.testers} />
                ) : (
                  <div className='lead my-3'>No testers found</div>
                )}
              </Tab.Pane>
              <Tab.Pane eventKey='offers'>
                {project !== null && project.offers.length > 0 ? (
                  <ProjectOffers project={project} />
                ) : (
                  <div className='lead my-3'>No offers found</div>
                )}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Fragment>
  );
};

ProjectStatsNavigationTabs.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectStatsNavigationTabs;
