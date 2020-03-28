import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAllServicesForCurrentUser } from '../../../actions/freelance/service';
import MyServiceItem from './MyServiceItem';
import styles from '../../../css/freelance/my-services/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const MyServices = ({
  service: { loading, services },
  getAllServicesForCurrentUser
}) => {
  useEffect(() => {
    getAllServicesForCurrentUser();
  }, [getAllServicesForCurrentUser]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> My Services
          </div>
          <div className={styles.sub_heading}>
            Below is a list of all the services you have created
          </div>
          <Button
            variant='primary'
            className={`my-2 ${styles.btn_primary}`}
            href='/freelance/create-service'
          >
            <i className='fas fa-users'></i> Create new service
          </Button>
          {!loading && services.length > 0 ? (
            services.map(service => (
              <MyServiceItem
                key={service._id}
                service={service}
                styles={styles}
              />
            ))
          ) : (
            <div className={styles.sub_heading}>No services found</div>
          )}
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

MyServices.propTypes = {
  service: PropTypes.object.isRequired,
  getAllServicesForCurrentUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  service: state.service
});

export default connect(mapStateToProps, {
  getAllServicesForCurrentUser
})(MyServices);
