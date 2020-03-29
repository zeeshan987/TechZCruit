import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../../css/dashboard/style.module.css';
import { Button } from 'react-bootstrap';
import Footer from '../layout/Footer';
import Alert from '../layout/Alert';
import SideNav from '../layout/SideNav';
import socketIOClient from 'socket.io-client';

const Dashboard = ({}) => {
  useEffect(() => {
    const socket = socketIOClient();
    socket.on('message', msg => console.log(msg));
    socket.emit('message', 'This is message from client');
  }, []);

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
        </div>
      </section>

      <Footer styles={styles} />
    </Fragment>
  );
};

Dashboard.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(Dashboard);
