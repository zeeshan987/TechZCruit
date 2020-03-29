import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllGroupsForUser } from '../../../actions/community/group';
import PropTypes from 'prop-types';
import MyGroupItem from './MyGroupItem';
import { Button } from 'react-bootstrap';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';
import styles from '../../../css/community/my-groups/style.module.css';

const MyGroups = ({ getAllGroupsForUser, group: { loading, groups } }) => {
  useEffect(() => {
    getAllGroupsForUser();
  }, [getAllGroupsForUser]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <h1 className={styles.heading}>
            <i className='fas fa-user'></i> My Groups
          </h1>
          <div className={styles.sub_heading}>
            Below is a list of all the groups you have created
          </div>
          <Button
            variant='primary'
            className={styles.btn_primary}
            href='/community/create-group'
          >
            <i className='fas fa-users'></i> Create new group
          </Button>
          {!loading && groups.length > 0 ? (
            groups.map(group => (
              <MyGroupItem key={group._id} group={group} styles={styles} />
            ))
          ) : (
            <div className={styles.sub_heading}>No groups found</div>
          )}
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

MyGroups.propTypes = {
  getAllGroupsForUser: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  group: state.group
});

export default connect(mapStateToProps, {
  getAllGroupsForUser
})(MyGroups);
