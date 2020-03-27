import React, { Fragment } from 'react';
import PrivateRoute from './PrivateRoute';
import Services from '../freelance/services/Services';
import Service from '../freelance/service/Service';
// import MyProjects from '../testing/my-projects/MyProjects';
// import CreateProject from '../testing/project-forms/CreateProject';
// import EditProject from '../testing/project-forms/EditProject';
// import ProjectStats from '../testing/project-stats/ProjectStats';
// import ProjectTestcases from '../testing/project-testcases/ProjectTestcases';
// import CreateTestcase from '../testing/project-testcases/CreateTestcase';
// import OngoingProjects from '../testing/ongoing-projects/OngoingProjects';
// import OngoingProjectTestcases from '../testing/ongoing-project-testcases/OngoingProjectTestcases';

export const FreelanceRoutes = () => {
  return (
    <Fragment>
      <PrivateRoute exact path='/freelance' component={Services} />
      <PrivateRoute exact path='/freelance/service/:id' component={Service} />
      {/* <PrivateRoute exact path='/testing/project/:id' component={Project} />
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
      /> */}
    </Fragment>
  );
};

export default FreelanceRoutes;
