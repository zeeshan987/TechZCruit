import {
  SERVICE_ERROR,
  All_SERVICES_LOADED,
  SERVICE_LOADED,
  REVIEW_ADDED_STORE,
  REVIEW_REMOVED_STORE
} from '../../actions/types';

const initialState = {
  service: null,
  loading: true,
  errors: null,
  services: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case All_SERVICES_LOADED:
      return {
        ...state,
        loading: false,
        errors: null,
        services: payload
      };
    case SERVICE_LOADED:
      return {
        ...state,
        loading: false,
        errors: null,
        service: payload
      };
    case REVIEW_ADDED_STORE:
    case REVIEW_REMOVED_STORE:
      return {
        ...state,
        loading: false,
        errors: null,
        service: { ...state.service, reviews: payload.reviews }
      };
    case SERVICE_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload
      };
    default:
      return state;
  }
}
