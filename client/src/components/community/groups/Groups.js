import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllGroups } from '../../../actions/community/group';
import PropTypes from 'prop-types';
import GroupItem from './GroupItem';
import styles from '../../../css/community/groups/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';
import { Row } from 'react-bootstrap';

const Groups = ({ getAllGroups, group: { loading, groups }, auth }) => {
  useEffect(() => {
    getAllGroups();
  }, [getAllGroups]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>Community</div>
          <div className={styles.sub_heading}>
            Become a part of a group to view posts and discussions.
          </div>
          <Row>
            {!loading && groups.length > 0 ? (
              groups.map(group => (
                <GroupItem
                  key={group._id}
                  group={group}
                  auth={auth}
                  styles={styles}
                />
              ))
            ) : (
              <div className={styles.sub_heading}>No groups found</div>
            )}
          </Row>
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

Groups.propTypes = {
  getAllGroups: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  group: state.group,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getAllGroups
})(Groups);
