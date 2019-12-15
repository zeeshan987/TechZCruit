import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert as CustomAlert } from 'react-bootstrap';

const Alert = ({ alerts }) => {
  return alerts.map(alert => (
    <CustomAlert key={alert.id} variant={alert.alertType}>
      {alert.msg}
    </CustomAlert>
  ));
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
