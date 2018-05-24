import React from 'react';
import getWeb3 from '../../utils/provider';

let transientState = {};

class ConnectionStatus extends React.Component {
  componentWillMount() {
    this.changeState({ isConnected: 'unknown' });
  }

  checkIsConnected() {
    this.changeState({ isConnected: getWeb3().isConnected().toString() });
  }

  changeState(values) {
    transientState = Object.assign(transientState, values);
    this.setState(transientState);
  }

  render() {
    let connectionStatusClass;
    switch (this.state.isConnected) {
    case 'true':
      connectionStatusClass = 'alert alert-success';
      break;
    case 'false':
      connectionStatusClass = 'alert alert-danger';
      break;
    default:
      connectionStatusClass = 'alert alert-secondary';
    }
    return (
      <div>
        <h4>Is Connected</h4>
        <button onClick={this.checkIsConnected.bind(this)}>Check Status</button>&nbsp;&nbsp;
        <span className={connectionStatusClass} role="alert">{this.state.isConnected}</span>
      </div>
    );
  }
}

export default ConnectionStatus;
