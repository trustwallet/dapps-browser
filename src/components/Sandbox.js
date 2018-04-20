import React from 'react'
import ConnectionStatus from './systemchecks/ConnectionStatus'
import NetworkIdentity from './systemchecks/NetworkIdentity'

class Sandbox extends React.Component {
    render() {
        return (
            <div className="sandbox">
              <h1 className="title">Sandbox</h1>
              <ConnectionStatus />
              <hr />
              <NetworkIdentity />
            </div>
        )
    }
}

export default Sandbox
