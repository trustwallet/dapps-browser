import React from 'react'
import getWeb3 from '../utils/provider'

let transientState = {}

class Sandbox extends React.Component {
    componentWillMount() {
      this.changeState({ isConnected: 'unknown' })
    }

    render() {
        let connectionStatusClass
        switch (this.state.isConnected) {
          case 'true':
            connectionStatusClass = 'alert alert-success'
            break;
          case 'false':
            connectionStatusClass = 'alert alert-danger'
            break;
          default:
            connectionStatusClass = 'alert alert-secondary'
        }
        return (
            <div className="sandbox">
              <h1 className="title">Sandbox</h1>
              <h4>Is Connected</h4>
              <button onClick={this.checkIsConnected.bind(this)}>Check Status</button>&nbsp;&nbsp;
              <span className={connectionStatusClass} role="alert">{this.state.isConnected}</span>
              <hr />
              <h4>Get Network ID</h4>
            </div>
        )
    }

    checkIsConnected (e) {
      this.changeState({ isConnected: getWeb3().isConnected().toString() })
    }

    changeState (values) {
      transientState = Object.assign(transientState, values)
      this.setState(transientState)
    }
}

export default Sandbox
