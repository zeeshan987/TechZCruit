import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table, ProgressBar } from 'react-bootstrap';

const ProjectTestcases = ({ testCases }) => {
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
              <td>8</td>
              <td>
                <ProgressBar striped variant='success' now={82} label={`82%`} />
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
