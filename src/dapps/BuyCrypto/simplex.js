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
  }

  handleInputChange(event) {
    const target = event.target;
    const value =  target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state["digitalMoney"] + "-" + this.state["fiatMoney"]);



    var postData = {
         end_user_id: "6a611c36-344f-11e9-b210-d663bd873d93",
         digital_currency: "BTC",
         fiat_currency: "USD",
         requested_currency: "BTC",
         requested_amount: 0.1,
         wallet_id: "trustwallet",
         client_ip: "80.250.214.122"
    };

    this.trustClient.simplexQuote(postData)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res.data);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })

    event.preventDefault();
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
            value={this.state.value} 
            onChange={this.handleInputChange} />
             Field 1
        </label>
        </div>
        <div>
          <label>
          <input 
            type="text" 
            name="fiatMoney" 
            value={this.state.value} 
            onChange={this.handleInputChange} />
            Field 2
          </label>
        </div>
        <input type="submit" value="Buy" /> 
      </center>
      </form>
    );
  }
}

export default SimplexForm;
