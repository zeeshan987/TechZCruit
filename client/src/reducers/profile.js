import {
  PROFILE_LOADED,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  EXPERIENCE_ADDED,
  EDUCATION_ADDED,
  EXPERIENCE_REMOVED,
  EDUCATION_REMOVED,
  PROFILE_DELETED,
  ALL_PROFILES_LOADED
} from '../actions/types';

const initialState = {
  profile: null,
  loading: true,
  error: null,
  profiles: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PROFILE_LOADED:
    case EXPERIENCE_ADDED:
    case EDUCATION_ADDED:
    case EXPERIENCE_REMOVED:
    case EDUCATION_REMOVED:
      return {
        ...state,
        profile: payload,
        loading: false,
        error: null
      };
    case ALL_PROFILES_LOADED:
      return {
        ...state,
        profiles: payload,
        loading: false,
        error: null
      };
    case PROFILE_ERROR:
      return {
        ...state,
        profile: null,
        loading: false,
        error: payload,
        profiles: null
      };
    case CLEAR_PROFILE:
    case PROFILE_DELETED:
      return {
        ...state,
        profile: null,
        loading: false,
        error: null
      };
    default:
      return state;
  }
}
