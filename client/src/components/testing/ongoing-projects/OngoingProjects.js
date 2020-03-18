import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllOngoingProjectsForCurrentUser } from '../../../actions/testing/project';
import OngoingProjectItem from './OngoingProjectItem';
import styles from '../../../css/testing/ongoing-projects/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const OngoingProjects = ({
  project: { loading, projects },
  getAllOngoingProjectsForCurrentUser
}) => {
  useEffect(() => {
    getAllOngoingProjectsForCurrentUser();
  }, [getAllOngoingProjectsForCurrentUser]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> Ongoing projects
          </div>
          <p className={styles.sub_heading}>
            Below is a list of all the projects you have undertaken
          </p>
          {!loading && projects.length > 0 ? (
            projects.map(project => (
              <OngoingProjectItem
                key={project._id}
                project={project}
                styles={styles}
              />
            ))
          ) : (
            <div className={styles.sub_heading}>No projects found</div>
          )}
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

OngoingProjects.propTypes = {
  project: PropTypes.object.isRequired,
  getAllOngoingProjectsForCurrentUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, {
  getAllOngoingProjectsForCurrentUser
})(OngoingProjects);
