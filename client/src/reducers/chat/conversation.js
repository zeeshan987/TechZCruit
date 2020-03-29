import {
  ALL_CONVERSATIONS_LOADED,
  CONVERSATION_ERROR
} from '../../actions/types';

const initialState = {
  conversation: null,
  loading: false,
  errors: null,
  conversations: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_CONVERSATIONS_LOADED:
      return {
        ...state,
        loading: false,
        errors: null,
        conversations: payload
      };
    case CONVERSATION_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload
      };
    default:
      return state;
  }
}
