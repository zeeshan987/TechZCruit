import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'react-bootstrap';

const ProjectTestcases = props => {
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
          <tr>
            <td>Register a user</td>
            <td>
              This testcase is used to check the functionality of registration
              of new user
            </td>
            <td>A new user is registerd and dashboard is opened</td>
            <td>
              <Button variant='danger'>Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
};

ProjectTestcases.propTypes = {};

export default ProjectTestcases;
