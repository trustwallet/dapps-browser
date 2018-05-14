import React from 'react';
import getWeb3 from '../../utils/provider';
import networks from '../../networks';

let transientState = {};

class NetworkIdentity extends React.Component {
  componentWillMount() {
    this.changeState({ networkID: 'unknown' });
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

  checkID(e) {
    getWeb3()
      .version
      .getNetwork((error, networkId) => {
        if (error) {
          console.log(error);
          this.changeState({ networkID: 'error' });
        } else {
          const network = networks.find((network) => network.id === networkId);

          if (network !== undefined) {
            this.changeState({ networkID: `${network.id} - ${network.name}` });
          } else {
            console.log(`couldn't find network in list with networkId of '${networkId}'`);
            this.changeState({ networkID: `${networkId} - unknown` });
          }
        }
      });
  }

  changeState(values) {
    transientState = Object.assign(transientState, values);
    this.setState(transientState);
  }
}

export default NetworkIdentity;
