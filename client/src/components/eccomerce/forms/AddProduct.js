import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../../../css/ecommerce/AddProduct-form.css";
import MultiCarousel from "../carousel/MultiCarousel";

export const AddProduct = () => {
  const [formData, setFormData] = useState({
    productTitle: "",
    productDescription: "",
    productCategory: "",
    price: "",
    productTechnology: ""
  });

  const {
    productTitle,
    productDescription,
    productCategory,
    price,
    productTechnology
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // addExperience(formData, history);
  };

  return (
    <Fragment>
      {/* <div class='wrapper'>
        <div class='inner'> */}
      <form action=''>
        <h3>Registration Form</h3>
        <div class='form-wrapper'>
          <label for=''>Title</label>
          <input
            type='text'
            class='form-control'
            placeholder='i.e.,Eccomerce site'
          />
        </div>
        <div class='form-wrapper'>
          <label for=''>Discription</label>
          <input
            type='text'
            class='form-control'
            placeholder='i.e.,It is an android application.'
          />
        </div>
        <div class='form-wrapper'>
          <label for=''>Category</label>
          <input
            type='text'
            class='form-control'
            placeholder='i.e.,Android or Web'
          />
        </div>
        <div class='form-wrapper'>
          <label for=''>Technology</label>
          <input
            type='text'
            class='form-control'
            placeholder='i.e.,Html, Css, Javascript'
          />
        </div>
        <div class='form-wrapper'>
          <label for=''>Price</label>
          <input type='text' class='form-control' placeholder='i.e,30' />
        </div>
        <div class='checkbox'>
          <label>
            <input type='checkbox' /> I can accept the Terms of Use & Privacy
            Policy.
            <span class='checkmark'></span>
          </label>
        </div>{" "}
        <button>Register Now</button>
      </form>
      {/* <MultiCarousel /> */}
    </Fragment>
  );
};

export default AddProduct;
