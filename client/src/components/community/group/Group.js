import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getGroupById,
  removeMemberFromGroup
} from '../../../actions/community/group';
import PropTypes from 'prop-types';
import GroupNavigationTabs from './GroupNavigationTabs';
import { Button } from 'react-bootstrap';
import styles from '../../../css/community/group/style.module.css';
import SideNav from '../../layout/SideNav';
import Alert from '../../layout/Alert';
import Footer from '../../layout/Footer';

const Group = ({
  getGroupById,
  match,
  group: { loading, group },
  auth,
  removeMemberFromGroup,
  post
}) => {
  useEffect(() => {
    getGroupById(match.params.id);
  }, [getGroupById, match.params.id]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            {!loading && group !== null ? group.name : ''}
          </div>
          <div className={styles.sub_heading}>
            {!loading && group !== null ? group.description : ''}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {!loading &&
              auth.user !== null &&
              group !== null &&
              group.admin._id !== auth.user._id &&
              group.members
                .map(member => member.user._id)
                .indexOf(auth.user._id) > -1 && (
                <div>
                  <Button
                    className='my-2'
                    style={{ float: 'right' }}
                    onClick={() =>
                      removeMemberFromGroup(group._id, auth.user._id)
                    }
                  >
                    Leave group
                  </Button>
                </div>
              )}
            <div>
              <GroupNavigationTabs
                group={group}
                auth={auth}
                post={post}
                styles={styles}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

Group.propTypes = {
  getGroupById: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  removeMemberFromGroup: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  group: state.group,
  auth: state.auth,
  post: state.post
});

export default connect(mapStateToProps, {
  getGroupById,
  removeMemberFromGroup
})(Group);
