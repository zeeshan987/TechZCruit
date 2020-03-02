import {
  PRODUCT_ADDED,
  CLEAR_PRODUCT,
  All_PRODUCTS_LOADED,
  PRODUCT_LOADED,
  REVIEW_ADDED,
  PRODUCT_FAVOURITE,
  PRODUCT_UNFAVOURITE,
  PRODUCT_UPDATED,
  PRODUCT_REMOVED,
  PRODUCT_ERROR,
  GET_ALL_USERS
} from "../../actions/types";

const initialState = {
  product: null,
  loading: true,
  errors: null,
  products: [],
  users: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case All_PRODUCTS_LOADED:
      return {
        ...state,
        products: payload,
        loading: false,
        errors: null
      };
    case PRODUCT_LOADED:
    case PRODUCT_UPDATED:
      return {
        ...state,
        product: payload,
        loading: false,
        errors: null
      };
    case PRODUCT_ADDED:
      return {
        ...state,
        product: { ...state.product, payload },
        loading: false,
        errors: null
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
    case REVIEW_ADDED:
      return {
        ...state,
        loading: false,
        errors: null,
        product: { ...state.product, reviews: payload.reviews }
      };
    case PRODUCT_FAVOURITE:
    case PRODUCT_UNFAVOURITE:
      return {
        ...state,
        loading: false,
        errors: null,
        product: { ...state.product, favourite: payload }
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
