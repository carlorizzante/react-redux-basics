import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Provider extends Component {

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return this.props.children;
  }
}
Provider.childContextTypes = {
  // store: React.PropTypes.object
  // store: ReactPropTypes
  store: PropTypes.object
}
