import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createCampaign } from '../../../actions/crowdfunding/campaign';

const CampaignForm = ({ createCampaign, history }) => {
  const [formData, setFormData] = useState({
    campaignTitle: '',
    campaignDescription: '',
    category: '',
    fundsRequired: '',
    teamMembers: '',
    timeRequired: ''
  });

  const {
    campaignTitle,
    campaignDescription,
    category,
    fundsRequired,
    teamMembers,
    timeRequired
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    createCampaign(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Campaign</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Fill in the following information to
        setup your campaign
      </p>

      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select
            className='form-control'
            name='category'
            value={category}
            onChange={e => onChange(e)}
          >
            <option value=''>Please select your campaign category</option>
            <option value='Developer'>Design Tech</option>
            <option value='Student'>Game</option>
            <option value='Instructor'>Spaort</option>
            <option value='Intern'>Creative</option>
            <option value='Intern'>Business</option>
            <option value='Intern'>Animal</option>
            <option value='Intern'>Non-profit</option>
            <option value='Intern'>Medical</option>
            <option value='Intern'>Memorial</option>
            <option value='Other'>Other</option>
          </select>
          <small className='form-text text-muted'>
            Select your campaign category from above
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Campaign Title'
            name='campaignTitle'
            value={campaignTitle}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            This will be your campaign Title which others can see
          </small>
        </div>

        <div className='form-group'>
          <textarea
            cols='30'
            rows='5'
            placeholder='Project Description'
            className='form-control'
            name='campaignDescription'
            value={campaignDescription}
            onChange={e => onChange(e)}
          ></textarea>
          <small className='form-text text-muted'>
            Write your Project Idea for which which you want to start this
            campaign
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Funds Required'
            name='fundsRequired'
            value={fundsRequired}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            Write your target Funds required to start your Project
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Team Members'
            name='teamMembers'
            value={teamMembers}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            Please enter your team Members if any who are with you in developing
            this project
          </small>
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Time Required'
            name='timeRequired'
            value={timeRequired}
            onChange={e => onChange(e)}
          />
          <small className='form-text text-muted'>
            Tell us your Time required to collect funds
          </small>
        </div>
        <input type='submit' value='Submit' className='btn btn-primary my-2' />
      </form>
    </Fragment>
  );
};

CampaignForm.propTypes = {
  createCampaign: PropTypes.func.isRequired
};

export default connect(null, { createCampaign })(withRouter(CampaignForm));
