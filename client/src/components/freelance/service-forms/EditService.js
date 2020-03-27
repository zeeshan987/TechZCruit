import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import {
  getServiceById,
  updateService
} from '../../../actions/freelance/service';
import styles from '../../../css/crowdfunding/campaign-forms/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const EditCampaign = ({
  getServiceById,
  match,
  service: { service, loading },
  updateService,
  history
}) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    amount: ''
  });

  const { title, description, amount } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    updateService(match.params.id, formData, history);
  };

  useEffect(() => {
    getServiceById(match.params.id);

    setFormData({
      title: !loading && service.title ? service.title : '',
      description: !loading && service.description ? service.description : '',
      amount: !loading && service.amount ? service.amount : ''
    });
    // eslint-disable-next-line
  }, [getServiceById, loading]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> Edit Service
          </div>
          <div className={styles.sub_heading}>
            Fill in the following information to edit your service
          </div>
          <Form onSubmit={e => onSubmit(e)}>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Service title'
                name='title'
                value={title}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as='textarea'
                rows='5'
                placeholder='Service description'
                name='description'
                value={description}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type='text'
                placeholder='Amount'
                name='amount'
                value={amount}
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              className={styles.btn_primary}
            >
              Submit
            </Button>
            <Button
              variant='danger'
              className='my-2'
              onClick={() => history.push('/freelance/my-services')}
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

EditCampaign.propTypes = {
  getServiceById: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired,
  updateService: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  service: state.service
});

export default connect(mapStateToProps, {
  getServiceById,
  updateService
})(withRouter(EditCampaign));
