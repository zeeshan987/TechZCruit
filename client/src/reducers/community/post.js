import {
  ALL_POSTS_LOADED,
  POST_ADDED,
  POST_REMOVED,
  POST_ERROR,
  POST_LIKED,
  POST_UNLIKED,
  POST_LOADED,
  COMMENT_ADDED,
  COMMENT_REMOVED,
  COMMENT_ERROR
} from '../../actions/types';

const initialState = {
  post: null,
  loading: true,
  errors: null,
  posts: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_POSTS_LOADED:
      return {
        ...state,
        posts: payload,
        loading: false,
        errors: null
      };
    case POST_LOADED:
      return {
        ...state,
        post: payload,
        loading: false,
        errors: null
      };
    case POST_ADDED:
      return {
        ...state,
        posts: [...state.posts, payload],
        loading: false,
        errors: null
      };
    case POST_REMOVED:
      return {
        ...state,
        posts: [...state.posts.filter(post => post._id !== payload)],
        loading: false,
        errors: null
      };
    case POST_LIKED:
    case POST_UNLIKED:
      return {
        ...state,
        loading: false,
        errors: null,
        posts: [
          ...state.posts.map(post =>
            post._id === payload._id ? { ...post, likes: payload.likes } : post
          )
        ]
      };
    case COMMENT_ADDED:
    case COMMENT_REMOVED:
      return {
        ...state,
        loading: false,
        errors: null,
        post: { ...state.post, comments: payload.comments }
      };
    case POST_ERROR:
    case COMMENT_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload
      };

    default:
      return state;
  }
}
