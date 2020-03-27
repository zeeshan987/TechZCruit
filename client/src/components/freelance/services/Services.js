import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  getAllServices,
  searchService
} from '../../../actions/freelance/service';
import ServiceItem from './ServiceItem';
import styles from '../../../css/freelance/services/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const Services = ({
  service: { loading, services },
  getAllServices,
  searchService
}) => {
  useEffect(() => {
    getAllServices();
  }, [getAllServices]);

  const [formData, setFormData] = useState({
    description: ''
  });

  const { description } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (description === '') {
      getAllServices();
    } else {
      searchService(description);
    }
  };

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> Freelance Platform
          </div>
          <div className={styles.sub_heading}>
            Use this platform to acquire different services or offer people your
            own services
          </div>
          <Form onSubmit={e => onSubmit(e)}>
            <Form.Group>
              <Form.Control
                type='text'
                name='description'
                value={description}
                placeholder='Search services'
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Button type='submit' hidden />
            </Form.Group>
          </Form>
          <Row>
            {!loading && services.length > 0 ? (
              services.map(service => (
                <ServiceItem
                  key={service._id}
                  service={service}
                  styles={styles}
                />
              ))
            ) : (
              <div className={styles.sub_heading}>No services found</div>
            )}
          </Row>
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

Services.propTypes = {
  service: PropTypes.object.isRequired,
  getAllServices: PropTypes.func.isRequired,
  searchService: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  service: state.service
});

export default connect(mapStateToProps, {
  getAllServices,
  searchService
})(Services);
