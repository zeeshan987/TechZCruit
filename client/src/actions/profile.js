import {
  PROFILE_LOADED,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  EXPERIENCE_ADDED,
  EXPERIENCE_ERROR,
  EDUCATION_ADDED,
  EDUCATION_ERROR
} from '../actions/types';
import { setAlert } from './alert';
import axios from 'axios';

// Get current profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profiles/me');

    dispatch({
      type: PROFILE_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err.response.data
    });
  }
};

// Create/Update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.post('/api/profiles', formData, config);

    dispatch({
      type: PROFILE_LOADED,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({ type: CLEAR_PROFILE });
  }
};

// Add experience
export const addExperience = (formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.put('/api/profiles/experience', formData, config);

    dispatch({
      type: EXPERIENCE_ADDED,
      payload: res.data
    });

    dispatch(setAlert('Experience Added', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({ type: EXPERIENCE_ERROR });
  }
};

// Add education
export const addEducation = (formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await axios.put('/api/profiles/education', formData, config);

    dispatch({
      type: EDUCATION_ADDED,
      payload: res.data
    });

    dispatch(setAlert('Education Added', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({ type: EDUCATION_ERROR });
  }
};
