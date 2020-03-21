import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  getProjectById,
  deleteTestcaseForProject
} from '../../../actions/testing/project';
import styles from '../../../css/testing/project-testcases/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

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
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> Project test cases
          </div>
          <div className={styles.sub_heading}>
            Below is a list of all the testcases to be checked for the project
          </div>
          <Button
            variant='primary'
            className={`my-3 ${styles.btn_primary}`}
            href={`/testing/project/testcases/${
              !loading && project !== null ? project._id : ''
            }/create-testcase`}
          >
            <i className='fas fa-users'></i> Create new test case
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
            <div className={styles.sub_heading}>No testcases found</div>
          )}
        </div>
      </section>

      <Footer styles={styles} />
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
