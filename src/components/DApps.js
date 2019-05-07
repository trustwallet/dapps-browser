import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import DAppItems from './DAppItems';
import DAppTopCards from './DAppTopCards';
import { TrustClient } from '../network/TrustClient';
import { TrustWeb3 } from "../network/TrustWeb3";

class DApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.trustClient = new TrustClient();
    this.trustWeb3 = new TrustWeb3();
  }

  componentWillMount() {
    this.fetch();
  }

  fetch = async() => {
    try {
      const networkId = await this.trustWeb3.getNetwork();
      const bootstrap = await this.trustClient.fetchBootstrap(networkId);
      this.setState({ data: bootstrap.data.docs });
    } catch (error) {
      console.log(`Error at fetch()`, error)
    }
  }

  render() {
    const elements = this.state.data || [];
    const categoryID = '5abcceb4682db901241a0636';
    const newDApp = elements.filter((item) => {
      return item.category._id === categoryID;
    });
    const othersDApp = elements.filter((item) => {
      return item.category._id !== categoryID;
    });

    return (
      <div>
        <div className="CardSlider">
          {newDApp.map(element => (
            <div key={element.category._id}>
              <Link to={`category/${element.category._id}`}>
                <h2 className="categories">{element.category.name}</h2>
              </Link>
              <DAppTopCards key={element} items={element.results} />
            </div>
          ))}
        </div>
        <div className="DApps">
          {othersDApp.map(element => (
            <div key={element.category._id}>
              <Link to={`category/${element.category._id}`}>
                <h2 className="categories">{element.category.name}</h2>
              </Link>
              <DAppItems key={element} items={element.results} />
            </div>
          ))}
        </div>
        <Footer configuration={{ show: (elements.length !== 0) }} />
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    const show = this.props.configuration.show;
    if (show) {
      return (
        <div>
          <hr />
          <div className="footer">
            <center>
              We do not control or endorse the Dapps listed,
              simply provide them as a list of convenience for you.
              Please investigate and proceed at your own risk.
            </center>
            <br />
            <center>
              <Link className="contact-us-link" to="/contact-us">
                                Contact Us
              </Link>
            </center>
          </div>
        </div>
      );
    }
    return (
      <div />
    );
  }
}

export default DApps;
