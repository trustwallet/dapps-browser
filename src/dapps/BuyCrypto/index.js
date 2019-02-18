import React from 'react';
import axios from 'axios';
import '../../App.css';
import ProviderItems from './components/ProviderItems';
import ServiceProviders from './components/ServiceProviders';

class DApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  componentWillMount() {
    //this.fetch();
  }

  componentDidMount() {
    this.content();

    document.title = "Buy Cryptocurrency";
  }

  async setStateAsync(state) {
    await this.setState(state);
  }

  fetch() {
    axios.get('https://api.ipdata.co/').then((response) => {
      this.setState({
        loading: false,
        countryCode: response.data.countryCode,
      });
    });
  }


   content = async() => {
    try {
      const query = new URLSearchParams(this.props.location.search);
      const address = query.get("address")
      const currency = query.get("currency")

      if (this.state.loading) {
        return (<div>Loading all the things</div>);
      }
      const providers = ServiceProviders.filter(provider => provider.currencies.has(currency));

      if (providers.length > 0) {
        const content = <div><ProviderItems items={providers} address={address}/></div>
        return await this.setStateAsync({content})
      }

      const content = <div>No providers supported in your country!</div>
      await this.setStateAsync({content})

    } catch (error) {
      console.log(`Error content() `, error)
    }
  }

  render() {
    return (
      <div>
        <h2 className="categories">Buy ETH with Credit/Debit Card</h2>
        {this.state.content}
        <br />
        {/* <center>
          <p className="media-body center">This provider list is made for your convenience only. By proceeding you are agreeing to take full responsibility for the transaction and to the fact that Trust Wallet is not accountable for any issues that result in full or partial loss of any digital assets.</p>
        </center> */}
      </div>
    );
  }
}

export default DApps;
