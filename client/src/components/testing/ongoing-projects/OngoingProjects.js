import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllOngoingProjectsForCurrentUser } from '../../../actions/testing/project';
import OngoingProjectItem from './OngoingProjectItem';

const OngoingProjects = ({
  project: { loading, projects },
  getAllOngoingProjectsForCurrentUser
}) => {
  useEffect(() => {
    getAllOngoingProjectsForCurrentUser();
  }, [getAllOngoingProjectsForCurrentUser]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Ongoing projects</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Below is a list of all the projects you
        have undertaken
      </p>
      {!loading && projects.length > 0 ? (
        projects.map(project => (
          <OngoingProjectItem key={project._id} project={project} />
        ))
      ) : (
        <div className='lead'>No projects found</div>
      )}
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
