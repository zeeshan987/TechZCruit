import {
  ALL_PROJECTS_LOADED,
  PROJECT_ERROR,
  PROJECT_LOADED,
  PROJECT_OFFER_SENT,
  ALL_PROJECTS_LOADED_FOR_USER,
  PROJECT_DELETED,
  PROJECT_CREATED,
  PROJECT_UPDATED
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
    case ALL_PROJECTS_LOADED_FOR_USER:
      return {
        ...state,
        projects: payload,
        loading: false,
        errors: null
      };
    case PROJECT_CREATED:
      return {
        ...state,
        loading: false,
        errors: null,
        projects: [...state.projects, payload]
      };
    case PROJECT_LOADED:
    case PROJECT_UPDATED:
      return {
        ...state,
        project: payload,
        loading: false,
        errors: null
      };
    case PROJECT_OFFER_SENT:
      return {
        ...state,
        loading: false,
        errors: null,
        project: { ...state.project, offers: payload.offers }
      };
    case PROJECT_DELETED:
      return {
        ...state,
        loading: false,
        errors: null,
        projects: [...state.projects.filter(item => item._id !== payload)]
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
