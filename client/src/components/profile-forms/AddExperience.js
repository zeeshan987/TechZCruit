import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    location: '',
    description: '',
    from: '',
    current: false,
    to: ''
  });

  const {
    company,
    position,
    location,
    description,
    from,
    current,
    to
  } = formData;

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
    addExperience(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Add Experience</h1>
      <p className='lead'>
        <i className='fab fa-black-tie'></i> Fill in the following information
        to add an experience
      </p>

      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Company'
            name='company'
            value={company}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            This can be your own company and also a company that you work for
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Position'
            name='position'
            value={position}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            Your position at that company
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Location'
            name='location'
            value={location}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            The location where the company is located
          </small>
        </div>

        <div className='form-group'>
          <textarea
            cols='30'
            rows='5'
            className='form-control'
            placeholder='Description'
            name='description'
            value={description}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            A description of the tasks you performed at the company
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { addExperience }
)(withRouter(AddExperience));
