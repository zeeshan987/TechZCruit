import {
  PROJECT_ERROR,
  ALL_PROJECTS_LOADED,
  PROJECT_LOADED
} from '../../actions/types';
import axios from 'axios';

// Get all projects
export const getAllProjects = () => async dispatch => {
  try {
    const res = await axios.get('/api/testing/projects');

    dispatch({
      type: ALL_PROJECTS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get project by id
export const getProjectById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/testing/projects/${id}`);

    dispatch({
      type: PROJECT_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
