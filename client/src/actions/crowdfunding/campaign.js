import { CAMPAIGN_UPLOADED, CLEAR_CAMPAIGN } from "../types";
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
      type: CAMPAIGN_UPLOADED,
      payload: res.data
    });
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
