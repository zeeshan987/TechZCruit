import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getAllProjectsForCurrentUser } from '../../../actions/testing/project';
import MyProjectItem from './MyProjectItem';
import styles from '../../../css/testing/my-projects/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const MyProjects = ({
  project: { loading, projects },
  getAllProjectsForCurrentUser
}) => {
  useEffect(() => {
    getAllProjectsForCurrentUser();
  }, [getAllProjectsForCurrentUser]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> My Projects
          </div>
          <div className={styles.sub_heading}>
            Below is a list of all the projects you have created
          </div>
          <Button
            variant='primary'
            className={`my-2 ${styles.btn_primary}`}
            href='/testing/create-project'
          >
            <i className='fas fa-users'></i> Create new project
          </Button>
          {!loading && projects.length > 0 ? (
            projects.map(project => (
              <MyProjectItem
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
