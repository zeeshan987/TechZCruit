import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../../../../actions/crowdfunding/campaign";
// campaign is not clicked yet so _id didnot come yet
// const CommentForm = ({ campaign: { _id }, addComment }) => {
const CommentForm = ({ campaign: {_id}, addComment }) => {
  const [formData, setFormData] = useState({
    description: ""
  });

  const { description } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addComment(_id, formData);
    setFormData({ description: "" });
  };

  return (
    <Fragment>
      <form className='my-3' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <textarea
            cols='30'
            rows='5'
            placeholder='Create a new comment'
            className='form-control'
            name='description'
            value={description}
            onChange={e => onChange(e)}
          ></textarea>
        </div>
        <input type='submit' value='Submit' className='btn btn-dark' />
      </form>
    </Fragment>
  );
};

CommentForm.propTypes = {
  campaign: PropTypes.object.isRequired,
  addComment: PropTypes.func.isRequired
};

export default connect(null, {
  addComment
})(CommentForm);
