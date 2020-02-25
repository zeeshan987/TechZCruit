import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import post from "./community/post";
import group from "./community/group";
import campaign from "./crowdfunding/campaign";
import product from "./ecommerce/product";

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  group,
  campaign,
  product
});
