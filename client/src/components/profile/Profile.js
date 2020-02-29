import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { getProfileById } from '../../actions/profile';
import styles from '../../css/profile/style.module.css';
import SideNav from '../layout/SideNav';
import Footer from '../layout/Footer';
import { Row } from 'react-bootstrap';

const Profile = ({ match, getProfileById, profile }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <section className={styles.section}>
            <SideNav styles={styles} />

            <div className={styles.content}>
              <ProfileTop profile={profile} styles={styles} />
              <ProfileAbout profile={profile} styles={styles} />
              <Row className='my-3'>
                <ProfileExperience
                  experiences={profile.experiences}
                  styles={styles}
                />
                <ProfileEducation
                  education={profile.education}
                  styles={styles}
                />
              </Row>
            </div>
          </section>

          <Footer styles={styles} />
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(mapStateToProps, { getProfileById })(Profile);
