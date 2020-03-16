import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  getAllProjects,
  searchProject
} from '../../../actions/testing/project';
import ProjectItem from './ProjectItem';
import styles from '../../../css/testing/projects/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const Projects = ({
  project: { loading, projects },
  getAllProjects,
  searchProject
}) => {
  useEffect(() => {
    getAllProjects();
  }, [getAllProjects]);

  const [formData, setFormData] = useState({
    description: ''
  });

  const { description } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (description === '') {
      getAllProjects();
    } else {
      searchProject(description);
    }
  };

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <h1 className={styles.heading}>
            <i className='fas fa-user'></i> Product Testing
          </h1>
          <p className={styles.sub_heading}>
            Use this platform to test your own software products and offer your
            services to other people in the community
          </p>
          <Form onSubmit={e => onSubmit(e)}>
            <Form.Group>
              <Form.Control
                type='text'
                name='description'
                value={description}
                placeholder='Search projects'
                onChange={e => onChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Button type='submit' hidden />
            </Form.Group>
          </Form>
          <Row>
            {!loading && projects.length > 0 ? (
              projects.map(project => (
                <ProjectItem
                  key={project._id}
                  project={project}
                  styles={styles}
                />
              ))
            ) : (
              <div className={styles.sub_heading}>No projects found</div>
            )}
          </Row>
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

Projects.propTypes = {
  project: PropTypes.object.isRequired,
  getAllProjects: PropTypes.func.isRequired,
  searchProject: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, {
  getAllProjects,
  searchProject
})(Projects);
