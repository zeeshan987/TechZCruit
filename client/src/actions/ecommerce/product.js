import {
  PRODUCT_ADDED,
  CLEAR_PRODUCT,
  PRODUCT_LOADED,
  PRODUCT_ERROR,
  PRODUCT_REMOVED,
  PRODUCT_FAVOURITE,
  REVIEW_ADDED,
  PRODUCT_UPDATED,
  PRODUCT_UNFAVOURITE,
  // All_PRODUCTS_LOADED,
  GET_ALL_USERS,
  All_PRODUCTS_LOADED_FOR_STORE
} from '../types';
import { setAlert } from '../alert';
import axios from 'axios';

// Create product
export const addProduct = (formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post('/api/ecommerce/products', formData, config);
    console.log(res.data);

    dispatch({
      type: PRODUCT_ADDED,
      payload: res.data
    });

    dispatch(setAlert('Product Added', 'success'));

    history.push('/ecommerce/homepage');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

//  Get Product by id
export const getProductById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/ecommerce/products/${id}`);

    dispatch({
      type: PRODUCT_LOADED,
      payload: res.data
    });
  } catch (err) {
    // dispatch({
    //   type: PRODUCT_ERROR,
    //   payload: {
    //     msg: err.error.response.statusText,
    //     status: err.response.status
    //   }
    // });
  }
};

// Review a Product
export const addReview = (productId, formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    console.log(productId, '  ProductID');
    const res = await axios.post(
      `/api/ecommerce/products/review/${productId}`,
      formData,
      config
    );
    console.log(res.data, '  Res data');
    dispatch({
      type: REVIEW_ADDED,
      payload: res.data
    });

    dispatch(setAlert('Review added', 'success'));
  } catch (err) {
    console.log(err);
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    // }
  }
};

// Get all products for a store
export const getAllProductsForStore = storeId => async dispatch => {
  try {
    const res = await axios.get(`/api/ecommerce/products/store/${storeId}`);

    dispatch({
      type: All_PRODUCTS_LOADED_FOR_STORE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all campaigns for user
export const getAllProductForUser = () => async dispatch => {
  try {
    const res = await axios.get('/api/ecommerce/products/user');
    console.log(res.data.length);

    // dispatch({
    //   type: All_PRODUCTS_LOADED,
    //   payload: res.data
    // });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get current Product
// export const getCurrentProduct = id => async dispatch => {
//   try {
//     const res = await axios.get(`/api/eccomerce/products/${id}`);

//     dispatch({
//       type: PRODUCT_ADDED,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: PRODUCT_ERROR,
//       payload: err.response.data
//     });
//   }
// };

// Delete product
export const deleteProduct = (pId, history) => async dispatch => {
  try {
    console.log('came up', pId);
    await axios.delete(`/api/ecommerce/products/${pId}`);
    console.log('came down');
    dispatch({
      type: PRODUCT_REMOVED,
      payload: pId
    });

    dispatch(setAlert('Product Removed', 'success'));
    history.push('/ecommerce/homepage');
  } catch (err) {
    const errors = err.response.data.errors;
    console.log('error', errors);
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
  }
};

// Favourite Product
export const favouriteProduct = productId => async dispatch => {
  try {
    const res = await axios.put(
      `/api/ecommerce/products/favourite/${productId}`
    );

    dispatch({
      type: PRODUCT_FAVOURITE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//unfavourite post
export const unfavouriteProduct = productId => async dispatch => {
  try {
    const res = await axios.put(
      `/api/ecommerce/products/unfavourite/${productId}`
    );

    dispatch({
      type: PRODUCT_UNFAVOURITE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Update a product
export const updateProduct = (id, formData, history) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.put(
      `/api/ecommerce/products/${id}`,
      formData,
      config
    );

    dispatch({
      type: PRODUCT_UPDATED,
      payload: res.data
    });

    dispatch(setAlert('Product updated', 'success'));

    history.push('/ecommerce/homepage');
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Search for a product
export const searchProduct = description => async dispatch => {
  try {
    const res = await axios.get(
      `/api/ecommerce/products/search/${description}`
    );

    // dispatch({
    //   type: All_PRODUCTS_LOADED,
    //   payload: res.data
    // });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get all users
export const getAllUsers = () => async dispatch => {
  try {
    const res = await axios.get('/api/users/store');
    console.log(res.data);

    dispatch({
      type: GET_ALL_USERS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PRODUCT_ERROR
    });

    dispatch(setAlert('Error occured while loading all Store owner', 'danger'));
  }
};
