import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const styles = {
  notification: {
    padding: '2rem',
    backgroundColor: 'rgba(255,100,255,0.5)'
  }
}

class Notification extends Component {

  render() {
    const el = document.getElementById('notification');
    return ReactDOM.createPortal(
      <div style={ styles.notification }>
        { this.props.children }
      </div>,
      el
    );
  }
}

export default Notification;
