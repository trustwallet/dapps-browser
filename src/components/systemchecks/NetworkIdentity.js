import React from 'react';
import getWeb3 from '../../utils/provider';
import networks from '../../networks';
import { TrustWeb3 } from "../../network/TrustWeb3";

let transientState = {};

class NetworkIdentity extends React.Component {
  trustWeb3 = new TrustWeb3()

  componentWillMount() {
    this.changeState({ networkID: 'unknown' });
  }

  async checkID() {
    try {
      const networkId = await this.trustWeb3.getNetwork();
      const network = networks.find(network => network.id === networkId);
  
      if (network !== undefined) {
        this.changeState({ networkID: `${network.id} - ${network.name}` });
      } else {
        console.log(`couldn't find network in list with networkId of '${networkId}'`);
        this.changeState({ networkID: `${networkId} - unknown` });
      }
    } catch (error) {
      console.log(`Error checkID()`, error)
      this.changeState({ networkID: 'error' });
    }
  }

  changeState(values) {
    transientState = Object.assign(transientState, values);
    this.setState(transientState);
  }

  render() {
    const networkIdentityClass = this.state.networkID === 'unknown' ? 'alert alert-secondary' : 'alert alert-success';

    return (
      <div>
        <h4>Get Network ID</h4>
        <button onClick={this.checkID.bind(this)}>Check Network ID</button>&nbsp;&nbsp;
        <span className={networkIdentityClass} role="alert">{this.state.networkID}</span>
      </div>
    );
  }
}

export default NetworkIdentity;
