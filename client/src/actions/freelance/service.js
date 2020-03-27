import {
  All_SERVICES_LOADED,
  SERVICE_ERROR,
  SERVICE_LOADED,
  REVIEW_ADDED_STORE,
  REVIEW_REMOVED_STORE
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

// // Get project for current user
// export const getAllProjectsForCurrentUser = () => async dispatch => {
//   try {
//     const res = await axios.get('/api/testing/projects/user');

//     dispatch({
//       type: ALL_PROJECTS_LOADED_FOR_USER,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: PROJECT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Create a new project
// export const createProject = (formData, history) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   try {
//     const res = await axios.post('/api/testing/projects', formData, config);

//     dispatch({
//       type: PROJECT_CREATED,
//       payload: res.data
//     });

//     dispatch(setAlert('Project created', 'success'));

//     history.push('/testing/my-projects');
//   } catch (err) {
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

// // Update a project
// export const updateProject = (id, formData, history) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   try {
//     const res = await axios.put(
//       `/api/testing/projects/${id}`,
//       formData,
//       config
//     );

//     dispatch({
//       type: PROJECT_UPDATED,
//       payload: res.data
//     });

//     dispatch(setAlert('Project updated', 'success'));

//     history.push('/testing/my-projects');
//   } catch (err) {
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

// // Send offer for project
// export const sendOfferForProject = (
//   id,
//   amount,
//   paymentMethodId
// ) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   const body = JSON.stringify({ amount, paymentMethodId });

//   try {
//     const res = await axios.put(
//       `/api/testing/projects/offer/${id}`,
//       body,
//       config
//     );

//     dispatch({
//       type: PROJECT_OFFER_SENT,
//       payload: res.data
//     });

//     dispatch(setAlert('Offer for project has been sent', 'success'));
//   } catch (err) {
//     dispatch({
//       type: PROJECT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });

//     dispatch(setAlert(err.response.data.msg, 'danger'));
//   }
// };

// // Delete a project
// export const deleteProject = id => async dispatch => {
//   try {
//     await axios.delete(`/api/testing/projects/${id}`);

//     dispatch({
//       type: PROJECT_DELETED,
//       payload: id
//     });

//     dispatch(setAlert('Project removed', 'success'));
//   } catch (err) {
//     dispatch({
//       type: PROJECT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

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

// // Delete an offer for a project
// export const deleteOfferForProject = (projectId, offerId) => async dispatch => {
//   try {
//     const res = await axios.delete(
//       `/api/testing/projects/offer/${projectId}/${offerId}`
//     );

//     dispatch({
//       type: PROJECT_OFFER_DELETED,
//       payload: res.data
//     });

//     dispatch(setAlert('Offer removed', 'success'));
//   } catch (err) {
//     dispatch({
//       type: PROJECT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Add tester to a project
// export const addTesterToProject = (projectId, userId) => async dispatch => {
//   try {
//     const res = await axios.put(`/api/testing/projects/${projectId}/${userId}`);

//     dispatch({
//       type: PROJECT_TESTER_ADDED,
//       payload: res.data
//     });

//     dispatch(setAlert('Tester added', 'success'));
//   } catch (err) {
//     dispatch({
//       type: PROJECT_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

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
