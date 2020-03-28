import {
  All_SERVICES_LOADED,
  SERVICE_ERROR,
  SERVICE_LOADED,
  REVIEW_ADDED_STORE,
  REVIEW_REMOVED_STORE,
  SERVICE_REQUEST_SENT,
  All_SERVICES_LOADED_FOR_CURRENT_USER,
  SERVICE_CREATED,
  SERVICE_REMOVED,
  SERVICE_UPDATED,
  SERVICE_REQUEST_REMOVED,
  SERVICE_SERVICE_ADDED
} from '../../actions/types';
import axios from 'axios';
import { setAlert } from '../../actions/alert';

// Get all services
export const getAllServices = () => async dispatch => {
  try {
    const res = await axios.get('/api/freelance/services');

    dispatch({
      type: All_SERVICES_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Search for a service
export const searchService = description => async dispatch => {
  try {
    const res = await axios.get(
      `/api/freelance/services/search/${description}`
    );

    dispatch({
      type: All_SERVICES_LOADED,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// // Get all ongoing projects for user
// export const getAllOngoingProjectsForCurrentUser = () => async dispatch => {
//   try {
//     const res = await axios.get('/api/testing/projects/user/ongoing');

//     dispatch({
//       type: ALL_ONGOING_PROJECTS_LOADED_FOR_USER,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: PROJECT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// Get service by id
export const getServiceById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/freelance/services/${id}`);

    dispatch({
      type: SERVICE_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get services for current user
export const getAllServicesForCurrentUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/freelance/services/user');

    dispatch({
      type: All_SERVICES_LOADED_FOR_CURRENT_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create a new service
export const createService = (formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/freelance/services', formData, config);

    dispatch({
      type: SERVICE_CREATED,
      payload: res.data
    });

    dispatch(setAlert('Service created', 'success'));

    history.push('/freelance/my-services');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Update a service
export const updateService = (id, formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(
      `/api/freelance/services/${id}`,
      formData,
      config
    );

    dispatch({
      type: SERVICE_UPDATED,
      payload: res.data
    });

    dispatch(setAlert('Service updated', 'success'));

    history.push('/freelance/my-services');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Send request for service
export const sendRequestForService = (
  id,
  description,
  amount,
  paymentMethodId
) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ description, amount, paymentMethodId });

  try {
    const res = await axios.put(
      `/api/freelance/services/request/${id}`,
      body,
      config
    );

    dispatch({
      type: SERVICE_REQUEST_SENT,
      payload: res.data
    });

    dispatch(setAlert('Request sent', 'success'));
  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete a service
export const deleteService = id => async dispatch => {
  try {
    await axios.delete(`/api/freelance/services/${id}`);

    dispatch({
      type: SERVICE_REMOVED,
      payload: id
    });

    dispatch(setAlert('Service removed', 'success'));
  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// // Delete a testcase for a project
// export const deleteTestcaseForProject = (
//   projectId,
//   testCaseId
// ) => async dispatch => {
//   try {
//     const res = await axios.delete(
//       `/api/testing/projects/testcase/${projectId}/${testCaseId}`
//     );

//     dispatch({
//       type: PROJECT_TESTCASE_DELETED,
//       payload: res.data
//     });

//     dispatch(setAlert('Test case removed', 'success'));
//   } catch (err) {
//     dispatch({
//       type: PROJECT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Create a testcase for a project
// export const createTestcaseForProject = (
//   projectId,
//   formData,
//   history
// ) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   try {
//     const res = await axios.put(
//       `/api/testing/projects/testcase/${projectId}`,
//       formData,
//       config
//     );

//     dispatch({
//       type: PROJECT_TESTCASE_CREATED,
//       payload: res.data
//     });

//     dispatch(setAlert('Test case created', 'success'));

//     history.push(`/testing/project/testcases/${projectId}`);
//   } catch (err) {
//     console.log(err);
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: PROJECT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// Delete a request for a service
export const deleteRequestForService = (
  serviceId,
  requestId
) => async dispatch => {
  try {
    const res = await axios.delete(
      `/api/freelance/services/request/${serviceId}/${requestId}`
    );

    dispatch({
      type: SERVICE_REQUEST_REMOVED,
      payload: res.data
    });

    dispatch(setAlert('Request removed', 'success'));
  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add service to service
export const addServiceToService = (serviceId, requestId) => async dispatch => {
  try {
    const res = await axios.put(
      `/api/freelance/services/${serviceId}/${requestId}`
    );

    dispatch({
      type: SERVICE_SERVICE_ADDED,
      payload: res.data
    });

    dispatch(setAlert('Service added', 'success'));
  } catch (err) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// // Finish testing for a project
// export const finishTestingForProject = projectId => async dispatch => {
//   try {
//     const res = await axios.put(`/api/testing/projects/finish/${projectId}`);

//     dispatch({
//       type: PROJECT_TESTING_FINISHED,
//       payload: res.data._id
//     });

//     dispatch(setAlert('Project testing finished', 'success'));
//   } catch (err) {
//     dispatch({
//       type: PROJECT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Pass a test case for a project
// export const passTestcaseForProject = (
//   projectId,
//   testCaseId
// ) => async dispatch => {
//   try {
//     const res = await axios.put(
//       `/api/testing/projects/testcase/pass/${projectId}/${testCaseId}`
//     );

//     dispatch({
//       type: PROJECT_TESTCASE_PASSED,
//       payload: res.data
//     });

//     dispatch(setAlert('Project test case passed', 'success'));
//   } catch (err) {
//     dispatch({
//       type: PROJECT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Fail a test case for a project
// export const failTestcaseForProject = (
//   projectId,
//   testCaseId
// ) => async dispatch => {
//   try {
//     const res = await axios.put(
//       `/api/testing/projects/testcase/fail/${projectId}/${testCaseId}`
//     );

//     dispatch({
//       type: PROJECT_TESTCASE_FAILED,
//       payload: res.data
//     });

//     dispatch(setAlert('Project test case failed', 'success'));
//   } catch (err) {
//     dispatch({
//       type: PROJECT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// Review on service
export const reviewOnService = (id, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(
      `/api/freelance/services/review/${id}`,
      formData,
      config
    );

    dispatch({
      type: REVIEW_ADDED_STORE,
      payload: res.data
    });

    dispatch(setAlert('Review added', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

// Delete review on service
export const deleteReviewOnService = (
  serviceId,
  reviewId
) => async dispatch => {
  try {
    const res = await axios.delete(
      `/api/freelance/services/review/${serviceId}/${reviewId}`
    );

    dispatch({
      type: REVIEW_REMOVED_STORE,
      payload: res.data
    });

    dispatch(setAlert('Review removed', 'success'));
  } catch (err) {
    console.log(err);
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
