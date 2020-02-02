import {
  CAMPAIGN_CREATED,
  CAMPAIGN_ERROR,
  CAMPAIGN_LOADED,
  COMMENT_ADDED,
  All_CAMPAIGNS_LOADED,
  All_CAMPAIGNS_LOADED_FOR_USER
} from '../../actions/types';

const initialState = {
  campaign: null,
  loading: true,
  errors: null,
  campaigns: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case All_CAMPAIGNS_LOADED:
    case All_CAMPAIGNS_LOADED_FOR_USER:
      return {
        ...state,
        campaigns: payload,
        loading: false,
        errors: null
      };
    case CAMPAIGN_CREATED:
      return {
        ...state,
        campaigns: [...state.campaigns, payload],
        loading: false,
        errors: null
      };
    case CAMPAIGN_LOADED:
      return {
        ...state,
        campaign: payload,
        loading: false,
        errors: null
      };
    case COMMENT_ADDED:
      return {
        ...state,
        loading: false,
        errors: null,
        campaign: { ...state.campaign, comments: payload.comments }
      };
    case CAMPAIGN_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload
      };
    default:
      return state;
  }
}
