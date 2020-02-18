import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAllProjectsForCurrentUser } from '../../../actions/testing/project';
import MyProjectItem from './MyProjectItem';

const MyProjects = ({
  project: { loading, projects },
  getAllProjectsForCurrentUser
}) => {
  useEffect(() => {
    getAllProjectsForCurrentUser();
  }, [getAllProjectsForCurrentUser, loading]);

  return (
    <Fragment>
      <h1 className='large text-primary'>My Projects</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Below is a list of all the projects you
        have created
      </p>
      <Button variant='primary' className='my-2' href='/testing/create-project'>
        <i className='fas fa-users'></i> Create new project
      </Button>
      {!loading && projects.length > 0 ? (
        projects.map(project => (
          <MyProjectItem key={project._id} project={project} />
        ))
      ) : (
        <div className='lead'>No projects found</div>
      )}
    </Fragment>
  );
};

MyProjects.propTypes = {
  project: PropTypes.object.isRequired,
  getAllProjectsForCurrentUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, {
  getAllProjectsForCurrentUser
})(MyProjects);
