import {
  SERVICE_ERROR,
  All_SERVICES_LOADED,
  SERVICE_LOADED
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
