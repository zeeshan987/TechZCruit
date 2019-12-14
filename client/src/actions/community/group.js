import { ALL_GROUPS_LOADED, GROUP_ERROR } from '../types';
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
