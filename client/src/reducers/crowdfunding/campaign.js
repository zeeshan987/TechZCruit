import {
  CAMPAIGN_UPLOADED,
  CLEAR_CAMPAIGN
} from "../../actions/crowdfunding/campaign";

const initialState = {
  campaign: null,
  loading: true,
  error: null
};

export default function(state = initialState, actions) {
  const { type, payload } = action;

  switch (type) {
    case CAMPAIGN_UPLOADED:
      return {
        ...state,
        campaign: payload,
        loading: false,
        error: null
      };
    case CLEAR_CAMPAIGN:
      return {
        ...state,
        campaign: null,
        loading: false,
        error: null
      };
      default:
          return state;
  }
}
