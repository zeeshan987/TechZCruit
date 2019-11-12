import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { removeEducation } from '../../actions/profile';

const Education = ({ education, removeEducation }) => {
  return (
    <Fragment>
      <p className='lead my-2'>Education Credentials</p>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>School</th>
            <th scope='col'>From</th>
            <th scope='col'>To</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {education.map(education => (
            <tr key={education._id}>
              <td>{education.school}</td>
              <td>
                <Moment format='DD-MMM-YYYY'>{education.from}</Moment>
              </td>
              <td>
                {education.current ? (
                  'Now'
                ) : (
                  <Moment format='DD-MMM-YYYY'>{education.to}</Moment>
                )}
              </td>
              <td>
                <button
                  onClick={() => removeEducation(education._id)}
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

Education.propTypes = {
  education: PropTypes.array.isRequired,
  removeEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { removeEducation }
)(Education);
