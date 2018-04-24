import React from 'react';
import '../../App.css';
import {
    Row,
    Col,
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom'
import axios from "axios";
import ProviderItems from "./components/ProviderItems"
import getWeb3 from '../../utils/provider'

const listOfProviders = [
    { 
        name: "Coinbase",
        description: "Cheap way to buy crypto",
        image: "/assets/coinbase.png",
        // countries: new Set([
        //     "US", "CA"
        // ]),
        supportAll: true,
        url: function url(address) {
            return "https://buy.coinbase.com/widget?code=88d6141a-ff60-536c-841c-8f830adaacfd&crypto_currency=ETH&address=" + address
        },
        fees: "up to ~4%",
        limits: "Varies",
        delivery: "Immediate",
        networks: new Set([1]),
        ignoredCountries: new Set([]),
    },
    { 
        name: "Changelly",
        description: "Cheap way to buy crypto",
        image: "/assets/changelly.png",
        // countries: new Set([
        //     "US", "CA"
        // ]),
        ignoredCountries: new Set(["US"]),
        supportAll: true,
        url: function(address) {
            return "https://changelly.com/widget/v1?auth=email&from=USD&to=ETH&merchant_id=968d4f0f0bf9&ref_id=968d4f0f0bf9&color=00cf70&address=" + address
        },
        fees: "up to ~5%",
        limits: "Varies",
        delivery: "Immediate",
        networks: new Set([1]),
        ignoredCountries: new Set([]),
    },
    { 
        name: "Indacoin",
        description: "Cheap way to buy crypto",
        image: "/assets/indacoin.png",
        // countries: new Set([
        //     "US", "CA"
        // ]),
        supportAll: true,
        url: function(address) {
            return "https://indacoin.com/gw/payment_form?partner=trustwallet&cur_to=ETH&amount=100&address=" + address
        },
        fees: "up to ~10%",
        limits: "Varies",
        delivery: "Immediate",
        networks: new Set([1]),
        ignoredCountries: new Set(["US"]),
    },
    { 
        name: "Ropsten Faucet",
        description: "",
        image: "https://res.cloudinary.com/djb6n1qih/image/upload/c_scale,h_128,w_128/v1524225248/ethereum.png",
        // countries: new Set([
        //     "US", "CA"
        // ]),
        supportAll: true,
        url: function(address) {
            return "http://faucet.ropsten.be:3001/"
        },
        fees: "Free",
        limits: "1 test ETH",
        delivery: "Immediate",
        networks: new Set([3]),
        ignoredCountries: new Set([]),
    },
    { 
        name: "Rinkeby Faucet",
        description: "",
        image: "https://res.cloudinary.com/djb6n1qih/image/upload/c_scale,h_128,w_128/v1524225248/ethereum.png",
        supportAll: true,
        url: function(address) {
            return "https://faucet.rinkeby.io/"
        },
        fees: "Free",
        limits: "Up to 18 test ETH",
        delivery: "Immediate",
        networks: new Set([4]),
        ignoredCountries: new Set([]),
    }
    ,
    { 
        name: "Sokol Faucet",
        description: "",
        image: "https://res.cloudinary.com/djb6n1qih/image/upload/c_scale,h_128,w_128/v1524225248/ethereum.png",
        supportAll: true,
        url: function(address) {
            return "https://faucet-sokol.herokuapp.com/"
        },
        fees: "Free",
        limits: "0.5 SPOA",
        delivery: "Immediate",
        networks: new Set([77]),
        ignoredCountries: new Set([]),
    }
]

class DApps extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loading: true }
    }

    fetch() {
        axios.get("https://api.ipdata.co/").then((response) => {
            this.setState({ 
                loading: false,
                country_code: response.data.country_code,
            });
        });
    }

    componentWillMount() {
        this.fetch()
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
        )
    }

    content() {
        let country_code = this.state.country_code
        let address = getWeb3().eth.accounts[0]
        let network = parseInt(getWeb3().version.network)
        if (this.state.loading) {
            return (
                <div>
                    Loading all the things
                </div>
            )
        } else {
            let providers = listOfProviders.filter(provider => {
                return provider.networks.has(network) && !provider.ignoredCountries.has(country_code)
            });
            if (!address) {
                return (
                    <div>
                        No wallet address provided or not supported network!
                    </div>
                )
            } else if (providers.length > 0) {
                return (
                    <div>
                        <ProviderItems items={providers} address={address} />
                    </div>
                )
            } else {
                return (
                    <div>
                        No providers supported in your country: {country_code}
                    </div>
                )
            }
        }       
    }
}

export default DApps;
