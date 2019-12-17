import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getGroupById } from '../../../actions/community/group';
import PropTypes from 'prop-types';
import GroupNavigationTabs from './GroupNavigationTabs';

const Group = ({ getGroupById, match, group: { loading, group } }) => {
  useEffect(() => {
    getGroupById(match.params.id);
  }, [getGroupById]);

  return (
    <Fragment>
      <h1 className='large text-primary'>
        {!loading && group !== null ? group.name : ''}
      </h1>
      <p className='lead'>
        <i className='fas fa-users'></i>{' '}
        {!loading && group !== null ? group.description : ''}
      </p>
      <GroupNavigationTabs group={group} />
    </Fragment>
  );
};

Group.propTypes = {
  getGroupById: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  group: state.group
});

export default connect(mapStateToProps, {
  getGroupById
})(Group);
