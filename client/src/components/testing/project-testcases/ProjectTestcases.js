import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  getProjectById,
  deleteTestcaseForProject
} from '../../../actions/testing/project';

const ProjectTestcases = ({
  project: { loading, project },
  getProjectById,
  match,
  deleteTestcaseForProject
}) => {
  useEffect(() => {
    getProjectById(match.params.id);
  }, [getProjectById, match.params.id]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Project testcases</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Below is a list of all the testcases to
        be checked for the project
      </p>
      <Button
        variant='primary'
        className='my-3'
        href={`/testing/project/testcases/5e4bb2e3340f141f58d465b9/create-testcase`}
      >
        <i className='fas fa-users'></i> Create new testcase
      </Button>

      {!loading && project !== null && project.testCases.length > 0 ? (
        <Table striped hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Expected result</th>
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
                  <Button
                    variant='danger'
                    onClick={() =>
                      deleteTestcaseForProject(project._id, testcase._id)
                    }
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className='lead'>No testcases found</div>
      )}
    </Fragment>
  );
};

ProjectTestcases.propTypes = {
  project: PropTypes.object.isRequired,
  getProjectById: PropTypes.func.isRequired,
  deleteTestcaseForProject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, {
  getProjectById,
  deleteTestcaseForProject
})(ProjectTestcases);
