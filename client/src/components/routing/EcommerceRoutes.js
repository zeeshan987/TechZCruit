import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../eccomerce/forms/AddProduct";
import HomePage from "../eccomerce/homepage/HomePage";

const EccomerceRoutes = () => {
  return (
    <Fragment>
      <Route exact path='/ecommerce' component={AddProduct} />
      <Route exact path='/homepage' component={HomePage} />
    </Fragment>
  );
};

export default EccomerceRoutes;
