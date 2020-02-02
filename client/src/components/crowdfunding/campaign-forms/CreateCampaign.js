import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createCampaign } from '../../../actions/crowdfunding/campaign';
import { Form, Button } from 'react-bootstrap';

const CreateCampaign = ({ createCampaign, history }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    fundsRequired: '',
    completionDate: ''
  });

  const {
    title,
    description,
    category,
    fundsRequired,
    completionDate
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
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group>
          <Form.Control
            as='select'
            name='category'
            value={category}
            onChange={e => onChange(e)}
          >
            <option value=''>Please select campaign category</option>
            <option value='1'>Technology</option>
            <option value='2'>Games</option>
            <option value='3'>Sports</option>
            <option value='4'>Photography</option>
            <option value='5'>Food</option>
            <option value='6'>Films & Video</option>
            <option value='7'>Music</option>
            <option value='8'>Design</option>
            <option value='9'>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Campaign title'
            name='title'
            value={title}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            rows='5'
            placeholder='Campaign description'
            name='description'
            value={description}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Required funds'
            name='fundsRequired'
            value={fundsRequired}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Completion date</Form.Label>
          <Form.Control
            type='date'
            name='completionDate'
            value={completionDate}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </Fragment>
  );
};

CreateCampaign.propTypes = {
  createCampaign: PropTypes.func.isRequired
};

export default connect(null, {
  createCampaign
})(withRouter(CreateCampaign));
