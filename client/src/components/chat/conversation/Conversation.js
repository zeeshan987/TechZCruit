import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getAllConversationsForCurrentUser,
  getConversationById
} from '../../../actions/chat/conversation';
import styles from '../../../css/chat/my-conversations/style.module.css';
import Footer from '../../layout/Footer';
import Alert from '../../layout/Alert';
import SideNav from '../../layout/SideNav';
import MyConversationItem from './MyConversationItem';
// import socketIOClient from 'socket.io-client';

const Conversation = ({
  conversation: { loading, conversation },
  auth,
  getConversationById,
  match
}) => {
  useEffect(() => {
    getConversationById(match.params.id);
    // const socket = socketIOClient();
    // socket.on('message', msg => console.log(msg));
    // socket.emit('message', 'This is message from client');
  }, [getConversationById]);

  return (
    <Fragment>
      <section className={styles.section}>
        <SideNav styles={styles} />

        <div className={styles.content}>
          <Alert />
          <div className={styles.heading}>
            <i className='fas fa-user'></i>{' '}
            {!loading &&
              auth.user !== null &&
              conversation !== null &&
              conversation.users.filter(
                item => item.user._id !== auth.user._id
              )[0].user.name}
          </div>
          <div className={styles.sub_heading}>
            Below is a list of all your conversations
          </div>
          {/* {!loading && auth.user !== null && conversations.length > 0 ? (
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
          )} */}
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

Conversation.propTypes = {
  conversation: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getConversationById: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  conversation: state.conversation,
  auth: state.auth
});

export default connect(mapStateToProps, {
  getConversationById
})(Conversation);
