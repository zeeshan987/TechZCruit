import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjectById } from '../../../actions/testing/project';
import ProjectStatsNavigationTabs from './ProjectStatsNavigationTabs';

const ProjectStats = ({ project: { project }, getProjectById, match }) => {
  useEffect(() => {
    getProjectById(match.params.id);
  }, [getProjectById, match.params.id]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Project Statistics</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Below are the statistics related to the
        current project
      </p>
      <ProjectStatsNavigationTabs project={project} />
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
