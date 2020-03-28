import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getServiceById } from '../../../actions/freelance/service';
import ServiceStatsNavigationTabs from './ServiceStatsNavigationTabs';
import styles from '../../../css/freelance/service-stats/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const ServiceStats = ({ service: { service }, getServiceById, match }) => {
  useEffect(() => {
    getServiceById(match.params.id);
  }, [getServiceById, match.params.id]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> Service Statistics
          </div>
          <div className={styles.sub_heading}>
            Below are the statistics related to the current service
          </div>
          <ServiceStatsNavigationTabs service={service} styles={styles} />
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

ServiceStats.propTypes = {
  service: PropTypes.object.isRequired,
  getServiceById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  service: state.service
});

export default connect(mapStateToProps, {
  getServiceById
})(ServiceStats);
