import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getGroupById, updateGroup } from '../../../actions/community/group';
import { useEffect } from 'react';

const EditGroup = ({
  getGroupById,
  match,
  group: { loading, group },
  updateGroup,
  history
}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const { name, description } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    updateGroup(formData, match.params.id, history);
  };

  useEffect(() => {
    getGroupById(match.params.id);

    setFormData({
      name: !loading && group.name ? group.name : '',
      description: !loading && group.description ? group.description : ''
    });
    // eslint-disable-next-line
  }, [getGroupById, loading, match.params.id]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Group</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Fill in the following information to
        update the group info
      </p>
      <Form onSubmit={e => onSubmit(e)}>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            rows='5'
            placeholder='Description'
            name='description'
            value={description}
            onChange={e => onChange(e)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

EditGroup.propTypes = {
  getGroupById: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired,
  updateGroup: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  group: state.group
});

export default connect(mapStateToProps, {
  getGroupById,
  updateGroup
})(withRouter(EditGroup));
