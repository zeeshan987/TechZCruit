import {
  ALL_GROUPS_LOADED,
  GROUP_ERROR,
  ALL_GROUPS_LOADED_FOR_USER
} from '../types';
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
