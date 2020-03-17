import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { changeName } from '../../actions/auth';
import { setAlert } from '../../actions/alert';

const Name = ({ changeName, setAlert, styles }) => {
  const [formData, setFormData] = useState({
    name: ''
  });

  const { name } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (name.trim().length === 0) {
      setAlert('Name cannot be empty', 'danger');
    } else {
      changeName(name);
      setFormData({ ...formData, name: '' });
    }
  };

  return (
    <Fragment>
      <Row>
        <Col md={12}>
          <div className={styles.sub_heading}>Name</div>
          <Form onSubmit={e => onSubmit(e)}>
            <Form.Group>
              <Form.Control
                name='name'
                value={name}
                placeholder='New name'
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              className={styles.btn_primary}
            >
              Update name
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
    </Fragment>
  );
};

Name.propTypes = {
  auth: PropTypes.object.isRequired,
  changeName: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired
};

export default connect(null, {
  changeName,
  setAlert
})(Name);
