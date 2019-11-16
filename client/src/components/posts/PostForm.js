import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { createNewPost } from '../../actions/post';
import { connect } from 'react-redux';

const PostForm = ({ createNewPost }) => {
  const [formData, setFormData] = useState({
    description: ''
  });

  const { description } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    createNewPost(formData);
    setFormData({ description: '' });
  };

  return (
    <Fragment>
      <form className='my-3' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <textarea
            cols='30'
            rows='5'
            placeholder='Create a new post'
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

PostForm.propTypes = {
  createNewPost: PropTypes.func.isRequired
};

export default connect(null, { createNewPost })(PostForm);
