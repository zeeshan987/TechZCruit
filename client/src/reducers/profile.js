import {
  PROFILE_LOADED,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  EXPERIENCE_ADDED,
  EXPERIENCE_ERROR,
  EDUCATION_ADDED,
  EDUCATION_ERROR
} from '../actions/types';

const initialState = {
  profile: null,
  loading: true,
  error: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case PROFILE_LOADED:
    case EXPERIENCE_ADDED:
    case EDUCATION_ADDED:
      return {
        ...state,
        profile: payload,
        loading: false,
        error: null
      };
    case PROFILE_ERROR:
      return {
        ...state,
        profile: null,
        loading: false,
        error: payload
      };
    case CLEAR_PROFILE:
    case EXPERIENCE_ERROR:
    case EDUCATION_ERROR:
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
