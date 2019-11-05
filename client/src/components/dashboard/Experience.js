import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Experience = ({ experiences }) => {
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
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experiences: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  experiences: state.profile.profile.experiences
});

export default connect(mapStateToProps)(Experience);
