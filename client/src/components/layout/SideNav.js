import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SideNav = ({ styles, auth: { loading, user } }) => {
  return (
    <Fragment>
      <div class={styles.side_nav}>
        <div className={styles.side_nav_heading}>User Management</div>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to={!loading && user !== null ? `/profile/${user._id}` : ''}>
          My Profile
        </Link>
        <Link to='/settings'>Settings</Link>
        <div className={styles.side_nav_heading}>Community</div>
        <Link to='/community'>All groups</Link>
        <Link to='/community/my-groups'>My groups</Link>
      </div>
    </Fragment>
  );
};

SideNav.propTypes = {
  styles: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(SideNav);
