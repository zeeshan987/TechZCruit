import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { removeExperience } from '../../actions/profile';

const Experience = ({ experiences, removeExperience }) => {
  return (
    <Fragment>
      <p className='lead my-2'>Experience Credentials</p>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>Company</th>
            <th scope='col'>From</th>
            <th scope='col'>To</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {experiences.map(experience => (
            <tr key={experience._id}>
              <td>{experience.company}</td>
              <td>
                <Moment format='DD-MMM-YYYY'>{experience.from}</Moment>
              </td>
              <td>
                {experience.current ? (
                  'Now'
                ) : (
                  <Moment format='DD-MMM-YYYY'>{experience.to}</Moment>
                )}
              </td>
              <td>
                <button
                  onClick={() => removeExperience(experience._id)}
                  className='btn btn-danger'
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experiences: PropTypes.array.isRequired,
  removeExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { removeExperience }
)(Experience);
