import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { uploadProfilePicture } from '../../actions/auth';

const ProfilePicture = ({ auth: { user }, uploadProfilePicture }) => {
  const [formData, setFormData] = useState({
    file: ''
  });

  const { file } = formData;

  const onChange = e => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const onSubmit = e => {
    e.preventDefault();
    uploadProfilePicture(file);
  };

  return (
    <Fragment>
      <Row>
        <Col md={12}>
          <div className='lead'>Profile Picture</div>
          <div style={{ textAlign: 'center' }}>
            <img
              src={user !== null ? user.avatar : ''}
              alt=''
              className='round-img my-3'
              style={{ width: '200px', height: '200px' }}
            ></img>
          </div>
          <Form onSubmit={e => onSubmit(e)}>
            <Form.Group>
              <Form.Control type='file' onChange={e => onChange(e)} />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Upload profile picture
            </Button>
          </Form>
          <Button variant='danger' className='my-3'>
            Remove profile picture
          </Button>
        </Col>
      </Row>
      <hr />
    </Fragment>
  );
};

ProfilePicture.propTypes = {
  auth: PropTypes.object.isRequired,
  uploadProfilePicture: PropTypes.func.isRequired
};

export default connect(null, {
  uploadProfilePicture
})(ProfilePicture);
