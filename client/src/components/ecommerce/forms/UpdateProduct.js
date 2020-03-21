import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import {
  getProductById,
  updateProduct
} from "../../../actions/ecommerce/product";

const UpdateProduct = ({
  getProductById,
  match,
  product: { product, loading },
  updateProduct,
  history
}) => {
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
    updateProduct(match.params.id, formData, history);
  };

  useEffect(() => {
    getProductById(match.params.id);
    console.log("useeffecet update", match.params.id);
    setFormData({
      productTitle:
        !loading && product.productTitle ? product.productTitle : "",
      productDescription:
        !loading && product.productDescription
          ? product.productDescription
          : "",
      productCategory:
        !loading && product.productCategory ? product.productCategory : "",
      price: !loading && product.price ? product.price : "",
      productTechnology:
        !loading && product.productTechnology ? product.productTechnology : ""
    });
    // eslint-disable-next-line
  }, [getProductById, loading]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit product</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Fill in the following information to
        update the product info
      </p>
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group>
          <Form.Control
            as='select'
            name='productCategory'
            value={productCategory}
            onChange={e => onChange(e)}
          >
            <option value=''>Please select product productCategory</option>
            <option value='1'>Web</option>
            <option value='2'>Games</option>
            <option value='3'>Android</option>
            <option value='4'>IOS</option>
            <option value='5'>Content Management System</option>
            <option value='6'>Desktop</option>
            <option value='7'>E-commerce</option>
            <option value='8'>Design</option>
            <option value='9'>Other</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='product productTitle'
            name='productTitle'
            value={productTitle}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            rows='5'
            placeholder='product productDescription'
            name='productDescription'
            value={productDescription}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Required funds'
            name='price'
            value={price}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>product Technology</Form.Label>
          <Form.Control
            type='text'
            name='productTechnology'
            value={productTechnology}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
    </Fragment>
  );
};

UpdateProduct.propTypes = {
  getProductById: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  updateProduct: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  product: state.product
});

export default connect(mapStateToProps, {
  getProductById,
  updateProduct
})(withRouter(UpdateProduct));
