import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjectById } from '../../../actions/testing/project';
import ProjectStatsNavigationTabs from './ProjectStatsNavigationTabs';
import styles from '../../../css/testing/project-stats/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const ProjectStats = ({ project: { project }, getProjectById, match }) => {
  useEffect(() => {
    getProjectById(match.params.id);
  }, [getProjectById, match.params.id]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> Project Statistics
          </div>
          <div className={styles.sub_heading}>
            Below are the statistics related to the current project
          </div>
          <ProjectStatsNavigationTabs project={project} styles={styles} />
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

ProjectStats.propTypes = {
  project: PropTypes.object.isRequired,
  getProjectById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, {
  getProjectById
})(ProjectStats);
