import React, { Fragment } from 'react';
import PrivateRoute from './PrivateRoute';
import Post from '../../components/community/post/Post';
import Groups from '../../components/community/groups/Groups';
import MyGroups from '../community/my-groups/MyGroups';
import CreateGroup from '../community/group-forms/CreateGroup';
import EditGroup from '../community/group-forms/EditGroup';
import Group from '../community/group/Group';

export const CommunityRoutes = () => {
  return (
    <Fragment>
      <PrivateRoute exact path='/community/post/:id' component={Post} />
      <PrivateRoute exact path='/community' component={Groups} />
      <PrivateRoute exact path='/community/my-groups' component={MyGroups} />
      <PrivateRoute
        exact
        path='/community/create-group'
        component={CreateGroup}
      />
      <PrivateRoute
        exact
        path='/community/edit-group/:id'
        component={EditGroup}
      />
      <PrivateRoute exact path='/community/group/:id' component={Group} />
    </Fragment>
  );
};

export default CommunityRoutes;
