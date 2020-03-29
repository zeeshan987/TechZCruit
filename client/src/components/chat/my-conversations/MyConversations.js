import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllConversationsForCurrentUser } from '../../../actions/chat/conversation';
import styles from '../../../css/community/group/style.module.css';
import Footer from '../../layout/Footer';
import Alert from '../../layout/Alert';
import SideNav from '../../layout/SideNav';
import MyConversationItem from './MyConversationItem';
// import socketIOClient from 'socket.io-client';

const MyConversations = ({
  conversation: { loading, conversations },
  getAllConversationsForCurrentUser,
  auth
}) => {
  useEffect(() => {
    getAllConversationsForCurrentUser();
    // const socket = socketIOClient();
    // socket.on('message', msg => console.log(msg));
    // socket.emit('message', 'This is message from client');
  }, [getAllConversationsForCurrentUser]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i> Chat
          </div>
          <div className={styles.sub_heading}>
            Below is a list of all your conversations
          </div>
          {!loading && auth.user !== null && conversations.length > 0 ? (
            conversations.map(conversation => (
              <MyConversationItem
                key={conversation._id}
                conversation={conversation}
                styles={styles}
                auth={auth}
              />
            ))
          ) : (
            <div className={styles.sub_heading}>No conversations found</div>
          )}
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

MyConversations.propTypes = {
  conversation: PropTypes.object.isRequired,
  getAllConversationsForCurrentUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  conversation: state.conversation,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getAllConversationsForCurrentUser
})(MyConversations);
