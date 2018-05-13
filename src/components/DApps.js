import React from 'react';
import '../App.css';
import {
    Link,
} from 'react-router-dom'
import DAppItems from "./DAppItems"
import { TrustClient } from "../network/TrustClient"
import getWeb3 from '../utils/provider'

class DApps extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
        this.trustClient = new TrustClient()
    }

    fetch() {
        let network = parseInt(getWeb3().version.network, 10)
        this.trustClient.fetchBootstrap(network).then(response => {
            this.setState({ data: response.data.docs });
        });
    }

    componentWillMount() {
        this.fetch()
    }

    render() {
        const elements = this.state.data || []
        return (
            <div>
                <div className="DApps">
                    {elements.map((element, index) => (
                        <div key={element.category._id}>
                            <Link to={"category/" + element.category._id}>
                                <h2 className="categories">{element.category.name}</h2>
                            </Link>
                            <DAppItems key={element} items={element.results} />
                        </div>
                    ))}
                </div>
                <Footer configuration={{ show: (elements.length !== 0) }} />
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        const show = this.props.configuration.show
        if (show) {
            return (
                <div>
                    <hr />
                    <div className="footer">
                        <center>
                            We do not control or endorse the Dapps listed, simply provide them as a list of convenience for you. Please investigate and proceed at your own risk.
                        </center>
                        <br />
                        <center>
                            <Link className="contact-us-link" to="/contact-us">
                                Contact Us
                            </Link>
                        </center>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default DApps;
