import {
  CAMPAIGN_ADDED,
  CLEAR_CAMPAIGN,
  CAMPAIGN_ERROR,
  CAMPAIGN_LOADED,
  COMMENT_ADDED,
  All_CAMPAIGNS_LOADED
} from "../../actions/types";

const initialState = {
  campaign: null,
  loading: true,
  errors: null,
  campaigns: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CAMPAIGN_ADDED:
      return {
        ...state,
        campaign: [...state.campaign, payload],
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
    case CLEAR_CAMPAIGN:
      return {
        ...state,
        campaign: null,
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
    case All_CAMPAIGNS_LOADED:
      return {
        ...state,
        campaigns: payload,
        loading: false,
        errors: null
      };
    case CAMPAIGN_ERROR:
      return {
        ...state,
        campaign: null,
        loading: false,
        errors: payload,
        campaigns: null
      };
    default:
      return state;
  }
}
