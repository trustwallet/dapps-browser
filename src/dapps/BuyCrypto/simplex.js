import React from 'react';
import '../../App.css';
import { TrustClient } from '../../network/TrustClient';

class SimplexForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      digitalMoney: "",
      fiatMoney: ""
    };

    this.trustClient = new TrustClient();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.getQuoteResponse = {}
    this.getPaymentResponse = {}


    this.walletId = "trustwallet"
    this.endUserId = this.generateUUID()
    this.clientIP = "80.250.214.122"

    this.supportedDigitalCurrencies = {
      "0": "BTC",
      "145": "BCH",
      "2": "LTC",
      "60": "ETH"
    }

    this.supportedFiatCurrencies = ["USD", "EUR"]
  }

  handleInputChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    this.setState({
      [name === "digitalMoney" ? "fiatMoney" : "digitalMoney"]: ""
    });
  }

  handleSubmit(event) {
    const fiatMoney = parseFloat(this.state["fiatMoney"]);
    const digitalMoney = parseFloat(this.state["digitalMoney"]);

    if (isNaN(fiatMoney) && isNaN(digitalMoney)) {
       return
    }



    const query = new URLSearchParams(this.props.location.search);
    const fiatCurrency = query.get("fiat_currency")
    const coin = query.get("coin")

    const requestedCurrency = isNaN(fiatMoney) ? this.digitalCurrency(coin) : fiatCurrency
    const requestedAmount = isNaN(fiatMoney) ? digitalMoney : fiatMoney


    console.log("requestedCurrency: ", requestedCurrency);
    console.log("requestedAmount: ", requestedAmount);

    this.getQuote(requestedCurrency, parseFloat(requestedAmount));
    event.preventDefault();
  }

  digitalCurrency(coin) {
    return coin in this.supportedDigitalCurrencies ? this.supportedDigitalCurrencies[coin] : "BTC";
  }

  getQuote(requestedCurrency, requestedAmount) {
    const query = new URLSearchParams(this.props.location.search);
    const fiatCurrency = query.get("fiat_currency")
    const coin = query.get("coin")

    var postData = {
      end_user_id: this.endUserId,
      digital_currency: this.digitalCurrency(coin),
      fiat_currency: fiatCurrency,
      requested_currency: requestedCurrency,
      requested_amount: requestedAmount,
      wallet_id: this.walletId,
      client_ip: this.clientIP
    };

    console.log("POST GET QUOTE DATA: ", postData);

    this.trustClient.simplexQuote(postData)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res.data);
      this.getQuoteResponse = res.data;

      var updatedState = {
        digitalMoney: this.getQuoteResponse["digital_money"]["amount"],
        fiatMoney: this.getQuoteResponse["fiat_money"]["total_amount"]
      };
      this.setState(updatedState);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
      alert('Can"t get quoute: ' + err);
    })
  }

  generateUUID() {
    var result, i, j;
    result = '';
    for(j=0; j<32; j++) {
      if(j === 8 || j === 12 || j === 16 || j === 20) 
        result = result + '-';
        i = Math.floor(Math.random()*16).toString(16).toUpperCase();
        result = result + i;
      }
      return result;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <center>
        <div>
        <label>
          <input 
            type="text"
            name="digitalMoney" 
            value={this.state["digitalMoney"]} 
            onChange={this.handleInputChange} />
             Digital Currency
        </label>
        </div>
        <div>
          <label>
          <input 
            type="text" 
            name="fiatMoney" 
            value={this.state["fiatMoney"]} 
            onChange={this.handleInputChange} />
            Fiat Currency
          </label>
        </div>
        <input type="submit" value="Buy"/> 
      </center>
      </form>
    );
  }
}

export default SimplexForm;
