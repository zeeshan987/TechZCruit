import {
  CAMPAIGN_ADDED,
  CAMPAIGN_LOADED,
  CLEAR_CAMPAIGN,
  COMMENT_ADDED,
  CAMPAIGN_ERROR,
  All_CAMPAIGNS_LOADED
} from "../types";
import { setAlert } from "../alert";
import axios from "axios";

// Create/Update profile
export const createCampaign = (
  formData,
  history,
  edit = false
) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post(
      "/api/crowdfunding/campaign",
      formData,
      config
    );

    dispatch({
      type: CAMPAIGN_ADDED,
      payload: res.data
    });
    console.log("testing form");
    dispatch(
      setAlert(edit ? "Campaign Updated" : "Campaign Created", "success")
    );
    if (!edit) {
      history.push("/crowdfunding/homepage");
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({ type: CLEAR_CAMPAIGN });
  }
};

//  Get Campaign by id
export const getCampaignById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/crowdfunding/campaign/${id}`);

    dispatch({
      type: CAMPAIGN_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAMPAIGN_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Comment on Campaign
export const addComment = (id, formData) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post(
      `/api/crowdfunding/campaign/comment/${id}`,
      formData,
      config
    );

    dispatch({
      type: COMMENT_ADDED,
      payload: res.data
    });

    dispatch(setAlert("Comment added", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

// Get all campaigns
export const getAllCampaigns = () => async dispatch => {
  try {
    const res = await axios.get("/api/crowdfunding/campaign");

    dispatch({
      type: All_CAMPAIGNS_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAMPAIGN_ERROR
    });

    dispatch(setAlert("Error occured while loading all campaigns", "danger"));
  }
};

// Get current campaign
export const getCurrentCampaign = id => async dispatch => {
  try {
    const res = await axios.get(`/api/crowdfunding/campaign/${id}`);

    dispatch({
      type: CAMPAIGN_ADDED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CAMPAIGN_ERROR,
      payload: err.response.data
    });
  }
};
