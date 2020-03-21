import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AddProduct from '../eccomerce/forms/AddProduct';
import HomePage from '../eccomerce/homepage/HomePage';
import ProductDetail from '../eccomerce/productdetail/ProductDetail';
import Products from '../eccomerce/products/Products';
import Store from '../eccomerce/store/Store';
import ProductPage from '../eccomerce/homepage/HomePage';
import UpdateProduct from '../eccomerce/forms/UpdateProduct';
import MyStores from '../eccomerce/my-stores/MyStores';
import CreateStore from '../eccomerce/store-forms/CreateStore';
import EditStore from '../eccomerce/store-forms/EditStore';
import StoreProducts from '../eccomerce/store-products/StoreProducts';
import CreateProduct from '../eccomerce/store-products/CreateProduct';
import EditProduct from '../eccomerce/store-products/EditProduct';

const EccomerceRoutes = () => {
  return (
    <Fragment>
      {/* <PrivateRoute exact path='/ecommerce' component={AddProduct} />
      <PrivateRoute exact path='/ecommerce/homepage' component={ProductPage} />
      <PrivateRoute exact path='/ecommerce/products' component={Products} />
      <PrivateRoute exact path='/ecommerce/store' component={Store} />
      <PrivateRoute
        exact
        path='/ecommerce/updateproduct/:id'
        component={UpdateProduct}
      />
      <PrivateRoute
        exact
        path='/ecommerce/product/:id'
        component={ProductDetail}
      /> */}
      <PrivateRoute
        exact
        path='/ecommerce/store/products/:id/create-product'
        component={CreateProduct}
      />
      <PrivateRoute
        exact
        path='/ecommerce/store/products/:id/edit-product/:product_id'
        component={EditProduct}
      />
      <PrivateRoute
        exact
        path='/ecommerce/store/products/:id'
        component={StoreProducts}
      />
      <PrivateRoute exact path='/ecommerce/my-stores' component={MyStores} />
      <PrivateRoute
        exact
        path='/ecommerce/create-store'
        component={CreateStore}
      />
      <PrivateRoute
        exact
        path='/ecommerce/edit-store/:id'
        component={EditStore}
      />
    </Fragment>
  );
};

export default EccomerceRoutes;
