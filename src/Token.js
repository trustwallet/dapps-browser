import React from 'react';
import {
  Media
} from 'reactstrap';
import logo from './logo_solid_square_blue.svg';
import './App.css';

const marketplace = marketplace =>
  `https://api.trustwalletapp.com/marketplace`

class Token extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(marketplace(this.props.username))
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }

        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          result: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {
    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.result) return <p>Loading...</p>
    return (
      <div>

      <Media className="mt-1 align">
        <Media left bottom href="/">
        <img src={logo} className="App-logo" alt="logo" />
        </Media>
        <Media body>
          <Media heading>
          <a href={this.state.result.docs[0].url}>{this.state.result.docs[0].name}</a>
        </Media>
        {this.state.result.docs[0].description}
        </Media>
      </Media>
      </div>
    )
  }
}

export default Token;