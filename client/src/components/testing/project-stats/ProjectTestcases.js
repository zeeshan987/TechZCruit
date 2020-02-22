import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table, ProgressBar } from 'react-bootstrap';

const ProjectTestcases = ({ testCases }) => {
  const getSuccessRate = testCase => {
    return Math.round(
      testCase.actualResults.filter(result => result.status === true).length /
        testCase.actualResults.length
    );
  };

  return (
    <Fragment>
      <Table striped hover className='my-3'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Execution count</th>
            <th>Success rate</th>
          </tr>
        </thead>
        <tbody>
          {testCases.map(testCase => (
            <tr>
              <td>{testCase.name}</td>
              <td>{testCase.actualResults.length}</td>
              <td>
                <ProgressBar
                  striped
                  variant='success'
                  now={getSuccessRate(testCase) * 100}
                  label={`${getSuccessRate(testCase) * 100}%`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

ProjectTestcases.propTypes = {
  testCases: PropTypes.array.isRequired
};

export default ProjectTestcases;
