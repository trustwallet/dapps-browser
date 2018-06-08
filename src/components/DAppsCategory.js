import React from 'react';
import { osName } from 'react-device-detect';
import '../App.css';
import DAppItems from './DAppItems';
import { TrustClient } from '../network/TrustClient';
import getWeb3 from '../utils/provider';

class DAppsCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], category: {} };
    this.trustClient = new TrustClient();

    console.log(props);
  }

  componentWillMount() {
    this.fetch();
  }

  fetch() {
    const network = parseInt(getWeb3().version.network, 10);
    this.trustClient.fetchDAppsByCategoryID(this.props.id, network, osName).then((response) => {
      const list = response.data.docs;
      const category = response.data.category;
      this.setState({
        category,
        list,
      });
    });
  }

  render() {
    const name = this.state.category.name || 'Loading...';
    console.log(this.state.category);
    return (
      <div className="DApps">
        <h2 className="categories">{name}</h2>
        <DAppItems items={this.state.list} />
      </div>
    );
  }
}

export default DAppsCategory;
