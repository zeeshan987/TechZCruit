import {
  PRODUCT_ADDED,
  CLEAR_PRODUCT,
  All_PRODUCTS_LOADED,
  PRODUCT_LOADED,
  REVIEW_ADDED,
  PRODUCT_FAVOURITE,
  PRODUCT_UNFAVOURITE,
  PRODUCT_ERROR
} from "../../actions/types";

const initialState = {
  product: null,
  loading: true,
  errors: null,
  products: []
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
    case CLEAR_PRODUCT:
      return {
        ...state,
        product: null,
        loading: false,
        errors: null
      };
    case REVIEW_ADDED:
      // case COMMENT_REMOVED:
      return {
        ...state,
        loading: false,
        errors: null,
        product: { ...state.product, reviews: payload.reviews }
      };
    case PRODUCT_FAVOURITE:
      return {
        ...state,
        loading: false,
        errors: null,
        product: { ...state.product, favorite: payload.favorite }
      };
    default:
      return state;
  }
}
