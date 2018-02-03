import React from 'react';
import {
  Media
} from 'reactstrap';
import './App.css';

const marketplace = marketplace =>
  `https://api.trustwalletapp.com/marketplace`

class DApps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(marketplace(this.props))
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
    if (!this.state.result) return <p>Retrieving ...</p>
    return (
      <div>
        {this.state.result.docs.map((dapp, index) => (
          <div key={index}>
            <h2 className="categories">{dapp.category}</h2>
            <Media className="mt-1 align">
              <Media left bottom href="/">
                <img src={dapp.image} alt="logo"/>
              </Media>
              <Media body>
              <Media heading>
                <a href={dapp.url}>{dapp.name}</a>
              </Media>
              {dapp.description}
              </Media>
            </Media>
          </div>
        ))}
      </div>
    )
  }
}

export default DApps;