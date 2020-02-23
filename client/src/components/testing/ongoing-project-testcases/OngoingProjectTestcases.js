import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'react-bootstrap';

const OngoingProjectTestcases = props => {
  return (
    <Fragment>
      <h1 className='large text-primary'>Ongoing project test cases</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Below is a list of all the test cases of
        the current project you have checked
      </p>
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
          <tr>
            <td>Register a user</td>
            <td>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              recusandae?
            </td>
            <td>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
              autem?
            </td>
            <td>PASS</td>
            <td>
              <Button variant='success' className='m-1'>
                PASS
              </Button>
              <Button variant='danger' className='m-1'>
                FAIL
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
};

OngoingProjectTestcases.propTypes = {};

export default OngoingProjectTestcases;
