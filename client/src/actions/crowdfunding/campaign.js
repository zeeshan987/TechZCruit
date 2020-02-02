import {
  CAMPAIGN_CREATED,
  CAMPAIGN_LOADED,
  CLEAR_CAMPAIGN,
  COMMENT_ADDED,
  CAMPAIGN_ERROR,
  All_CAMPAIGNS_LOADED,
  All_CAMPAIGNS_LOADED_FOR_USER
} from '../types';
import { setAlert } from '../alert';
import axios from 'axios';

// Get all campaigns
export const getAllCampaigns = () => async dispatch => {
  try {
    const res = await axios.get('/api/crowdfunding/campaign');

    dispatch({
      type: All_CAMPAIGNS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAMPAIGN_ERROR
    });
  }
};

// Get all campaigns for user
export const getAllCampaignsForUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/crowdfunding/campaigns/user');

    dispatch({
      type: All_CAMPAIGNS_LOADED_FOR_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAMPAIGN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create/Update profile
export const createCampaign = (formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      '/api/crowdfunding/campaigns',
      formData,
      config
    );

    dispatch({
      type: CAMPAIGN_CREATED,
      payload: res.data
    });

    dispatch(setAlert('Campaign created', 'success'));

    history.push('/crowdfunding/my-campaigns');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

//  Get Campaign by id
export const getCampaignById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/crowdfunding/campaign/${id}`);

    dispatch({
      type: CAMPAIGN_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAMPAIGN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Comment on Campaign
export const addComment = (id, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(
      `/api/crowdfunding/campaign/comment/${id}`,
      formData,
      config
    );

    dispatch({
      type: COMMENT_ADDED,
      payload: res.data
    });

    dispatch(setAlert('Comment added', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

// Get current campaign
export const getCurrentCampaign = id => async dispatch => {
  try {
    const res = await axios.get(`/api/crowdfunding/campaign/${id}`);

    // dispatch({
    //   type: CAMPAIGN_ADDED,
    //   payload: res.data
    // });
  } catch (err) {
    dispatch({
      type: CAMPAIGN_ERROR,
      payload: err.response.data
    });
  }
};
