import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AddProduct from '../ecommerce/forms/AddProduct';
import HomePage from '../ecommerce/homepage/HomePage';
import ProductDetail from '../ecommerce/productdetail/ProductDetail';
// import Products from '../ecommerce/products/Products';
import ProductPage from '../ecommerce/homepage/HomePage';
import UpdateProduct from '../ecommerce/forms/UpdateProduct';
import MyStores from '../ecommerce/my-stores/MyStores';
import CreateStore from '../ecommerce/store-forms/CreateStore';
import EditStore from '../ecommerce/store-forms/EditStore';
import StoreProducts from '../ecommerce/store-products/StoreProducts';
import CreateProduct from '../ecommerce/store-products/CreateProduct';
import EditProduct from '../ecommerce/store-products/EditProduct';
import Store from '../ecommerce/store/Store';
import Product from '../ecommerce/product/Product';
import Products from '../ecommerce/products/Products';
import Stores from '../ecommerce/stores/Stores';

const EcommerceRoutes = () => {
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
      <PrivateRoute exact path='/ecommerce' component={Products} />
      <PrivateRoute exact path='/ecommerce/stores' component={Stores} />
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
      <PrivateRoute exact path='/ecommerce/store/:id' component={Store} />
      <PrivateRoute exact path='/ecommerce/product/:id' component={Product} />
    </Fragment>
  );
};

export default EcommerceRoutes;
