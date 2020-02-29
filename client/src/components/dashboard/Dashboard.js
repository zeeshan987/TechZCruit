import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import styles from '../../css/dashboard/style.module.css';
import { Button } from 'react-bootstrap';
import Footer from '../layout/Footer';
import Alert from '../layout/Alert';
import SideNav from '../layout/SideNav';

const Dashboard = ({
  auth: { user },
  getCurrentProfile,
  deleteProfile,
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div class={styles.heading}>
            <i class='fas fa-user'></i> Dashboard
          </div>
          <div class={styles.sub_heading}>Welcome {user && user.name}</div>

          {profile !== null ? (
            <Fragment>
              <DashboardActions styles={styles} />
              <Experience styles={styles} experiences={profile.experiences} />
              <Education styles={styles} education={profile.education} />
              <Button
                onClick={() => {
                  if (
                    window.confirm(
                      'Are you sure you want to delete your profile? You cannot undo this action'
                    )
                  ) {
                    deleteProfile();
                  }
                }}
                variant='danger'
                className='my-2'
              >
                <i className='fas fa-user'></i> Delete my account
              </Button>
            </Fragment>
          ) : (
            <Fragment>
              <p className='my-2'>
                You have not yet setup a profile, please add some info
              </p>
              <Button
                href='/create-profile'
                variant='primary'
                className={styles.btn_primary}
              >
                Create your profile
              </Button>{' '}
            </Fragment>
          )}
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteProfile })(
  Dashboard
);
