import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../eccomerce/forms/AddProduct";
import HomePage from "../eccomerce/homepage/HomePage";
import ProductDetail from "../eccomerce/productdetail/ProductDetail";
import Products from "../eccomerce/products/Products";
import Store from "../eccomerce/store/Store";
import ProductPage from "../eccomerce/homepage/HomePage";
import UpdateProduct from "../eccomerce/forms/UpdateProduct";

const EccomerceRoutes = () => {
  return (
    <Fragment>
      <PrivateRoute exact path='/ecommerce' component={AddProduct} />
      <PrivateRoute exact path='/ecommerce/homepage' component={ProductPage} />
      <PrivateRoute exact path='/ecommerce/products' component={Products} />
      <PrivateRoute exact path='/ecommerce/store/:id' component={Store} />
      <PrivateRoute exact path='/ecommerce/updateproduct/:id' component={UpdateProduct} />
      <PrivateRoute
        exact
        path='/ecommerce/product/:id'
        component={ProductDetail}
      />
      {/* <Route exact path='/homepage' component={HomePage} /> */}
    </Fragment>
  );
};

export default EccomerceRoutes;
