import {
  ALL_PROJECTS_LOADED,
  PROJECT_ERROR,
  PROJECT_LOADED,
  PROJECT_OFFER_SENT
} from '../../actions/types';

const initialState = {
  project: null,
  loading: true,
  errors: null,
  projects: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_PROJECTS_LOADED:
      return {
        ...state,
        loading: false,
        errors: null,
        projects: payload
      };
    case PROJECT_LOADED:
      return {
        ...state,
        loading: false,
        errors: null,
        project: payload
      };
    case PROJECT_OFFER_SENT:
      return {
        ...state,
        loading: false,
        errors: null,
        project: { ...state.project, offers: payload.offers }
      };
    case PROJECT_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload
      };
    default:
      return state;
  }
}
