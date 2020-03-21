import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Form } from "react-bootstrap";
import { addReview } from "../../../actions/ecommerce/product";

const ReviewForm = ({ productId, addReview }) => {
  const [formData, setFormData] = useState({
    description: ""
  });

  const { description } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addReview(productId, formData);
    setFormData({ description: "" });
  };

  return (
    <Fragment>
      <form
        onSubmit={e => onSubmit(e)}
        className={`form-contact form-review mt-3`}
      >
        <Form.Group>
          <Form.Control
            as='textarea'
            rows='5'
            placeholder='Add a Review'
            name='description'
            value={description}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        {/* <div className={`form-group`}>
          <textarea
            className={`form-control different-control w-100`}
            name='textarea'
            id='textarea'
            cols='30'
            rows='5'
            placeholder='Enter Message'
          ></textarea>
        </div> */}
        <div className={`form-group text-center text-md-right mt-3`}>
          <Button
            type='submit'
            className={`button button--active button-review`}
          >
            Submit
          </Button>
        </div>
      </form>
    </Fragment>
  );
};

ReviewForm.propTypes = {
  product: PropTypes.object.isRequired,
  addReview: PropTypes.func.isRequired
};

export default connect(null, { addReview })(ReviewForm);
