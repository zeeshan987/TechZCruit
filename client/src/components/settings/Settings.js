import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import ChangePassword from './ChangePassword';
import { connect } from 'react-redux';
import styles from '../../css/settings/style.module.css';
import SideNav from '../layout/SideNav';
import Alert from '../layout/Alert';
import Footer from '../layout/Footer';

const Settings = ({ auth }) => {
  return (
    <Fragment>
      <section>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> Settings
          </div>
          <ProfilePicture auth={auth} styles={styles} />
          <Name styles={styles} />
          <ChangePassword styles={styles} />
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

Settings.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Settings);
