import React from 'react';
import axios from 'axios';
import '../../App.css';
import ProviderItems from './components/ProviderItems';
import getWeb3 from '../../utils/provider';
import ServiceProviders from './components/ServiceProviders';

class DApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  componentWillMount() {
    //this.fetch();
  }

  fetch() {
    axios.get('https://api.ipdata.co/').then((response) => {
      this.setState({
        loading: false,
        countryCode: response.data.countryCode,
      });
    });
  }

  content() {
    const address = getWeb3().eth.accounts[0];
    const network = parseInt(getWeb3().version.network, 10);
    if (this.state.loading) {
      return (
        <div>
            Loading all the things
        </div>
      );
    }
    const providers = ServiceProviders.filter(provider => provider.networks.has(network));
    if (!address) {
      return (
        <div>
            No wallet address provided or not supported network!
        </div>
      );
    } else if (providers.length > 0) {
      return (
        <div>
          <ProviderItems items={providers} address={address} />
        </div>
      );
    }
    return (
      <div>
        No providers supported in your country!
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2 className="categories">Get ETH with Credit/Debit Card</h2>
        {this.content()}
        <br />
        <center>
          <p className="media-body center">This provider list is made for your convenience only. By proceeding you are agreeing to take full responsibility for the transaction and to the fact that Trust Wallet is not accountable for any issues that result in full or partial loss of any digital assets.</p>
        </center>
      </div>
    );
  }
}

export default DApps;
