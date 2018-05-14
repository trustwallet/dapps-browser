import React from 'react';
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

    fetch() {
        let network = parseInt(getWeb3().version.network, 10);
        this.trustClient.fetchDAppsByCategoryID(this.props.id, network).then( response => {
            let list = response.data.docs;
            let category = response.data.category;
            this.setState({
                category: category, 
                list: list
            });
        });
    }   

    componentWillMount() {
        this.fetch();
    }

    render() {
        let name = this.state.category.name || "Loading...";
        console.log(this.state.category);
        return (
            <div className="DApps">
                <h2 className="categories">{name}</h2>
                <DAppItems items = {this.state.list}/>
            </div>
        )
    }
}

export default DAppsCategory;
