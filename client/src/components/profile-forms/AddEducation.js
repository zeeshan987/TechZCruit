import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldOfStudy: '',
    from: '',
    current: false,
    to: ''
  });

  const { school, degree, fieldOfStudy, from, current, to } = formData;

  const [disableToDate, setDisableToDate] = useState(false);

  const toggleDisplayToDate = () => {
    setDisableToDate(!disableToDate);
    setFormData({ ...formData, to: '', current: !current });
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addEducation(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Add Education</h1>
      <p className='lead'>
        <i className='fas fa-book'></i> Fill in the the following information to
        add an education
      </p>

      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='School'
            name='school'
            value={school}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            The name of the school you got your education from
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Degree'
            name='degree'
            value={degree}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            The title of your degree such as Bachelor's, Master's etc.
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Field of Study'
            name='fieldOfStudy'
            value={fieldOfStudy}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            The specific field of study of your degree
          </small>
        </div>

        <div className='form-group'>
          <label htmlFor='from-date'>From Date</label>
          <input
            id='from-date'
            type='date'
            className='form-control'
            name='from'
            value={from}
            onChange={e => onChange(e)}
          />
        </div>

        <div className='form-group form-check'>
          <input
            id='current'
            type='checkbox'
            className='form-check-input'
            name='current'
            value={current}
            onChange={toggleDisplayToDate}
          />
          <label htmlFor='current' className='form-check-label'>
            Current
          </label>
        </div>

        <div className='form-group'>
          <label htmlFor='to-date'>To Date</label>
          <input
            id='to-date'
            type='date'
            className='form-control'
            disabled={disableToDate}
            name='to'
            value={to}
            onChange={e => onChange(e)}
          />
        </div>

        <input type='submit' value='Submit' className='btn btn-primary' />
      </form>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { addEducation }
)(withRouter(AddEducation));
