import React, { Fragment } from 'react';
import PrivateRoute from './PrivateRoute';
import Projects from '../testing/projects/Projects';
import Project from '../testing/project/Project';
import MyProjects from '../testing/my-projects/MyProjects';
import CreateProject from '../testing/project-forms/CreateProject';
import EditProject from '../testing/project-forms/EditProject';
import ProjectStats from '../testing/project-stats/ProjectStats';
import ProjectTestcases from '../testing/project-testcases/ProjectTestcases';
import CreateTestcase from '../testing/project-testcases/CreateTestcase';
import OngoingProjects from '../testing/ongoing-projects/OngoingProjects';
import OngoingProjectTestcases from '../testing/ongoing-project-testcases/OngoingProjectTestcases';

export const TestingRoutes = () => {
  return (
    <Fragment>
      <PrivateRoute exact path='/testing' component={Projects} />
      <PrivateRoute exact path='/testing/project/:id' component={Project} />
      <PrivateRoute exact path='/testing/my-projects' component={MyProjects} />
      <PrivateRoute
        exact
        path='/testing/ongoing-projects'
        component={OngoingProjects}
      />
      <PrivateRoute
        exact
        path='/testing/create-project'
        component={CreateProject}
      />
      <PrivateRoute
        exact
        path='/testing/edit-project/:id'
        component={EditProject}
      />
      <PrivateRoute
        exact
        path='/testing/project/stats/:id'
        component={ProjectStats}
      />
      <PrivateRoute
        exact
        path='/testing/project/testcases/:id'
        component={ProjectTestcases}
      />
      <PrivateRoute
        exact
        path='/testing/ongoing-project/testcases/:id'
        component={OngoingProjectTestcases}
      />
      <PrivateRoute
        exact
        path='/testing/project/testcases/:id/create-testcase'
        component={CreateTestcase}
      />
    </Fragment>
  );
};

export default TestingRoutes;
