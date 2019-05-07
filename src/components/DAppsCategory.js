import React from 'react';
import '../App.css';
import DAppItems from './DAppItems';
import { TrustClient } from '../network/TrustClient';
import { TrustWeb3 } from "../network/TrustWeb3";

class DAppsCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], category: {} };
    this.trustClient = new TrustClient();
    this.trustWeb3 = new TrustWeb3();
    console.log(props);
  }

  componentWillMount() {
    this.fetch();
  }

  async fetch() {
    try {
      const network = await this.trustWeb3.getNetwork();
      const dapps = await this.trustClient.fetchDAppsByCategoryID(this.props.id, network)
      const list = dapps.data.docs;
      const category = dapps.data.category;
      
      this.setState({category, list});
    } catch (error) {
      console.log(`Error at fetch() `, error)
    }
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
