import {
  ALL_GROUPS_LOADED,
  GROUP_ERROR,
  ALL_GROUPS_LOADED_FOR_USER,
  GROUP_CREATED
} from '../types';
import { setAlert } from '../alert';
import axios from 'axios';

// Get all groups
export const getAllGroups = () => async dispatch => {
  try {
    const res = await axios.get('/api/community/groups');

    dispatch({
      type: ALL_GROUPS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all groups for user
export const getAllGroupsForUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/community/groups/user');

    dispatch({
      type: ALL_GROUPS_LOADED_FOR_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create a new group
export const createGroup = (formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/community/groups', formData, config);

    dispatch({
      type: GROUP_CREATED,
      payload: res.data
    });

    dispatch(setAlert('Group created', 'success'));

    history.push('/community/my-groups');
  } catch (err) {
    const errors = err.response.data.errors;

    if (err.response.data.errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: GROUP_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
