import {
  ALL_GROUPS_LOADED,
  GROUP_ERROR,
  ALL_GROUPS_LOADED_FOR_USER
} from '../../actions/types';

const initialState = {
  group: null,
  loading: true,
  errors: null,
  groups: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_GROUPS_LOADED:
    case ALL_GROUPS_LOADED_FOR_USER:
      return {
        ...state,
        groups: payload,
        loading: false,
        errors: null
      };
    case GROUP_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload
      };
    default:
      return state;
  }
}
