import {
  CONVERSATION_ERROR,
  ALL_CONVERSATIONS_LOADED,
  CONVERSATION_LOADED
} from '../types';
import axios from 'axios';

// Get all conversations for user
export const getAllConversationsForCurrentUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/chat/conversations/user');

    dispatch({
      type: ALL_CONVERSATIONS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CONVERSATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get conversation by id
export const getConversationById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/chat/conversations/${id}`);

    dispatch({
      type: CONVERSATION_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CONVERSATION_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
