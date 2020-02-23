import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  getProjectById,
  passTestcaseForProject,
  failTestcaseForProject
} from '../../../actions/testing/project';

const OngoingProjectTestcases = ({
  project: { loading, project },
  auth,
  getProjectById,
  match,
  passTestcaseForProject,
  failTestcaseForProject
}) => {
  useEffect(() => {
    getProjectById(match.params.id);
  }, [getProjectById, match.params.id]);

  const getUserIndex = testcase => {
    return testcase.actualResults
      .map(result => result.user)
      .indexOf(auth.user !== null ? auth.user._id : '');
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Ongoing project test cases</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Below is a list of all the test cases of
        the current project you have checked
      </p>
      {!loading && project !== null ? (
        <Table striped hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Expected result</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {project.testCases.map(testcase => (
              <tr>
                <td>{testcase.name}</td>
                <td>{testcase.description}</td>
                <td>{testcase.expectedResult}</td>
                <td>
                  {getUserIndex(testcase) === -1
                    ? 'Not executed'
                    : testcase.actualResults[getUserIndex(testcase)].status
                    ? 'PASS'
                    : 'FAIL'}
                </td>
                <td>
                  <Button
                    variant='success'
                    className='m-1'
                    onClick={() =>
                      passTestcaseForProject(project._id, testcase._id)
                    }
                  >
                    PASS
                  </Button>
                  <Button
                    variant='danger'
                    className='m-1'
                    onClick={() =>
                      failTestcaseForProject(project._id, testcase._id)
                    }
                  >
                    FAIL
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className='lead'>No test cases found</div>
      )}
    </Fragment>
  );
};

OngoingProjectTestcases.propTypes = {
  project: PropTypes.object.isRequired,
  getProjectById: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  passTestcaseForProject: PropTypes.func.isRequired,
  failTestcaseForProject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getProjectById,
  passTestcaseForProject,
  failTestcaseForProject
})(OngoingProjectTestcases);
