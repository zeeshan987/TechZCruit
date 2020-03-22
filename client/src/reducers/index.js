import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './community/post';
import group from './community/group';
import campaign from './crowdfunding/campaign';
import project from './testing/project';
import product from './ecommerce/product';
import store from './ecommerce/store';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  group,
  campaign,
  project,
  product,
  store
});
