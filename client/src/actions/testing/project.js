import {
  PROJECT_ERROR,
  ALL_PROJECTS_LOADED,
  PROJECT_LOADED,
  PROJECT_OFFER_SENT,
  ALL_PROJECTS_LOADED_FOR_USER,
  PROJECT_DELETED
} from '../../actions/types';
import axios from 'axios';
import { setAlert } from '../../actions/alert';

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

// Get project for current user
export const getAllProjectsForCurrentUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/testing/projects/user');

    dispatch({
      type: ALL_PROJECTS_LOADED_FOR_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Send offer for project
export const sendOfferForProject = (id, amount) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ amount });

  try {
    const res = await axios.put(
      `/api/testing/projects/offer/${id}`,
      body,
      config
    );

    dispatch({
      type: PROJECT_OFFER_SENT,
      payload: res.data
    });

    dispatch(setAlert('Offer for project has been sent', 'success'));
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });

    dispatch(setAlert(err.response.data.msg, 'danger'));
  }
};

// Delete a project
export const deleteProject = id => async dispatch => {
  try {
    await axios.delete(`/api/testing/projects/${id}`);

    dispatch({
      type: PROJECT_DELETED,
      payload: id
    });

    dispatch(setAlert('Project removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROJECT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
