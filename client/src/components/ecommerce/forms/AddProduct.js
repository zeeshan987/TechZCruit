import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import style from '../../../css/ecommerce/AddProduct-form.module.css';
// import { addProduct } from '../../../actions/ecommerce/product';
import styled from 'styled-components';
import SideNav from '../../layout/SideNav';
import Footer from '../../layout/Footer';
import Alert from '../../layout/Alert';

export const AddProduct = ({ addProduct, history }) => {
  const [formData, setFormData] = useState({
    productTitle: '',
    productDescription: '',
    productCategory: '',
    price: '',
    productTechnology: ''
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
    addProduct(formData, history);
  };

  return (
    <Fragment>
      <section className={style.section}>
        <SideNav styles={style} />

        <div className={style.content}>
          <Alert />
          <Body>
            <h1 className={`large text-primary`} style={heading}>
              Add Product
            </h1>
            <p className={`lead`}>
              <i className={`fas fa-book`}></i> Fill in the the following
              information to add an select in the store
            </p>
            <form onSubmit={e => onSubmit(e)}>
              <h3>Registration Form</h3>
              <div className={style.form_wrapper}>
                <label for=''>Title</label>
                <input
                  type='text'
                  className={style.form_control}
                  placeholder='i.e.,Eccomerce site'
                  name='productTitle'
                  value={productTitle}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className={style.form_wrapper}>
                <label for=''>Discription</label>
                <input
                  type='text'
                  className={style.form_control}
                  placeholder='i.e.,It is an android application.'
                  name='productDescription'
                  value={productDescription}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className={style.form_wrapper}>
                <label for=''>Category</label>
                <input
                  type='text'
                  className={style.form_control}
                  placeholder='i.e.,Android or Web'
                  name='productCategory'
                  value={productCategory}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className={style.form_wrapper}>
                <label for=''>Technology</label>
                <input
                  type='text'
                  className={style.form_control}
                  placeholder='i.e.,Html, Css, Javascript'
                  name='productTechnology'
                  value={productTechnology}
                  onChange={e => onChange(e)}
                />
              </div>
              <div className={style.form_wrapper}>
                <label for=''>Price</label>
                <input
                  type='text'
                  className={style.form_control}
                  placeholder='i.e,30'
                  name='price'
                  value={price}
                  onChange={e => onChange(e)}
                />
              </div>
              {/* <input type='submit' value='Save Product' className={style.button} /> */}
              <button type='submit' value='Submit' className={style.button}>
                Save Product
              </button>
            </form>
          </Body>
        </div>
      </section>

      <Footer styles={style} />
    </Fragment>
  );
};

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired
};
export default connect(null, {
  // addProduct
})(withRouter(AddProduct));

const Body = styled.body`
  font-family: 'Muli-Regular';
  color: #666;
  font-size: 13px;
  margin: 0;
`;

const heading = {
  // marginTop: "6rem"
};
