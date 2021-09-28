import { Component } from 'react';
import s from './Notification.module.css';
import PropTypes from 'prop-types';

class Notification extends Component {
  render() {
    return <p className={s.message}>{this.props.message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
