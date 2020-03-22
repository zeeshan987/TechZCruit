import {
  PRODUCT_CREATED,
  CLEAR_PRODUCT,
  // All_PRODUCTS_LOADED,
  PRODUCT_LOADED,
  REVIEW_ADDED,
  // PRODUCT_UNFAVOURITE,
  PRODUCT_UPDATED,
  PRODUCT_REMOVED,
  PRODUCT_ERROR,
  GET_ALL_USERS,
  All_PRODUCTS_LOADED_FOR_STORE,
  REVIEW_REMOVED,
  PRODUCT_LIKED,
  PRODUCT_UNLIKED
} from '../../actions/types';

const initialState = {
  product: null,
  loading: true,
  errors: null,
  products: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case All_PRODUCTS_LOADED_FOR_STORE:
      return {
        ...state,
        loading: false,
        errors: null,
        products: payload
      };
    case PRODUCT_CREATED:
      return {
        ...state,
        loading: false,
        errors: null,
        products: [...state.products, payload]
      };
    case PRODUCT_LOADED:
    case PRODUCT_UPDATED:
      return {
        ...state,
        product: payload,
        loading: false,
        errors: null
      };
    case REVIEW_ADDED:
    case REVIEW_REMOVED:
      return {
        ...state,
        loading: false,
        errors: null,
        product: { ...state.product, reviews: payload.reviews }
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        errors: payload
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
        errors: null
      };
    case CLEAR_PRODUCT:
      return {
        ...state,
        product: null,
        loading: false,
        errors: null
      };
    case PRODUCT_LIKED:
    case PRODUCT_UNLIKED:
      return {
        ...state,
        loading: false,
        errors: null,
        product: { ...state.product, likes: payload.likes }
      };
    case PRODUCT_REMOVED:
      return {
        ...state,
        loading: false,
        errors: null,
        products: [...state.products.filter(product => product._id !== payload)]
      };
    default:
      return state;
  }
}
