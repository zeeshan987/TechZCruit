import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getConversationById } from '../../../actions/chat/conversation';
import styles from '../../../css/chat/conversation/style.module.css';
import Footer from '../../layout/Footer';
import Alert from '../../layout/Alert';
import SideNav from '../../layout/SideNav';
import MyConversationItem from './MyConversationItem';
import { Form, InputGroup, Button } from 'react-bootstrap';
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
  }, [getConversationById, match.params.id]);

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
          <div className={styles.message_box}></div>
          <div className={styles.input_box}>
            <Form>
              <Form.Group style={{ marginBottom: '0' }}>
                <InputGroup>
                  <Form.Control type='text' placeholder='Enter message here' />
                  <InputGroup.Append>
                    <Button variant='success' style={{ width: '150px' }}>
                      <i className='fas fa-paper-plane'></i> Send
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Form>
          </div>
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
