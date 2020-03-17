import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import styles from '../../css/profile-forms/style.module.css';
import SideNav from '../layout/SideNav';
import Alert from '../layout/Alert';
import Footer from '../layout/Footer';
import { Form, Button } from 'react-bootstrap';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    location: '',
    description: '',
    from: '',
    current: false,
    to: ''
  });

  const {
    company,
    position,
    location,
    description,
    from,
    current,
    to
  } = formData;

  const [disableToDate, setDisableToDate] = useState(false);

  const toggleDisplayToDate = () => {
    setDisableToDate(!disableToDate);
    setFormData({ ...formData, to: '', current: !current });
  };

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addExperience(formData, history);
  };

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fab fa-black-tie'></i> Add Experience
          </div>
          <div className={styles.sub_heading}>
            Fill in the following information to add an experience
          </div>

          <Form onSubmit={e => onSubmit(e)}>
            <Form.Group>
              <Form.Control
                type='text'
                className='form-control'
                placeholder='Company'
                name='company'
                value={company}
                onChange={e => onChange(e)}
              />
              <Form.Text className='text-muted'>
                This can be your own company and also a company that you work
                for
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Control
                type='text'
                className='form-control'
                placeholder='Position'
                name='position'
                value={position}
                onChange={e => onChange(e)}
              />
              <Form.Text className='text-muted'>
                Your position at that company
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Control
                type='text'
                className='form-control'
                placeholder='Location'
                name='location'
                value={location}
                onChange={e => onChange(e)}
              />
              <Form.Text className='text-muted'>
                The location where the company is located
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Control
                as='textarea'
                cols='30'
                rows='5'
                placeholder='Description'
                name='description'
                value={description}
                onChange={e => onChange(e)}
              />
              <Form.Text className='text-muted'>
                A description of the tasks you performed at the company
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='from-date'>From Date</Form.Label>
              <Form.Control
                id='from-date'
                type='date'
                name='from'
                value={from}
                onChange={e => onChange(e)}
              />
            </Form.Group>

            <Form.Group className='form-group form-check'>
              <Form.Check
                id='current'
                name='current'
                type='checkbox'
                label='Current'
                value={current}
                onChange={toggleDisplayToDate}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='to-date'>To Date</Form.Label>
              <Form.Control
                id='to-date'
                type='date'
                disabled={disableToDate}
                name='to'
                value={to}
                onChange={e => onChange(e)}
              />
            </Form.Group>

            <Button
              variant='primary'
              type='submit'
              className={`${styles.btn_primary} my-2`}
            >
              Submit
            </Button>
            <Button
              variant='danger'
              className='my-2'
              onClick={() => history.push('/dashboard')}
            >
              Cancel
            </Button>
          </Form>
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(withRouter(AddExperience));
