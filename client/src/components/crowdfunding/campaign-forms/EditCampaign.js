import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import {
  getCampaignById,
  updateCampaign
} from '../../../actions/crowdfunding/campaign';

const EditCampaign = ({
  getCampaignById,
  match,
  campaign: { campaign, loading },
  updateCampaign,
  history
}) => {
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
    updateCampaign(match.params.id, formData, history);
  };

  useEffect(() => {
    getCampaignById(match.params.id);

    setFormData({
      title: !loading && campaign.title ? campaign.title : '',
      description: !loading && campaign.description ? campaign.description : '',
      category: !loading && campaign.category ? campaign.category : '',
      fundsRequired:
        !loading && campaign.fundsRequired ? campaign.fundsRequired : '',
      completionDate:
        !loading && campaign.completionDate
          ? campaign.completionDate.split('T')[0]
          : ''
    });
    // eslint-disable-next-line
  }, [getCampaignById, loading]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Campaign</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Fill in the following information to
        update the campaign info
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

EditCampaign.propTypes = {
  getCampaignById: PropTypes.func.isRequired,
  campaign: PropTypes.object.isRequired,
  updateCampaign: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  campaign: state.campaign
});

export default connect(mapStateToProps, {
  getCampaignById,
  updateCampaign
})(withRouter(EditCampaign));
