import React from 'react';
import {
  Media
} from 'reactstrap';
import './App.css';

export const marketsList = [
    {
        "name": "Token Factory",
        "url": "https://tokenfactory.netlify.com/",
        "description": "Issue & Interact with Standard Token Contracts on Ethereum.",
        "image": "https://tokenfactory.netlify.com/images/icon.png",
        "category": "utility"
    },
    // {
    //     "name": "Cent",
    //     "url": "https://beta.cent.co/",
    //     "description": "Give wisdom, get money. Ask a question and offer and bounty for the best answers.",
    //     "image": "https://beta.cent.co/img/logo_crop.png",
    //     "category": "social"
    // },
    // {
    //     "name": "OpenSea",
    //     "url": "https://opensea.io/",
    //     "description": "Peer-to-peer marketplace for rare digital items",
    //     "image": "https://opensea.io/static/images/opensea-icon.png",
    //     "category": "marketplaces"
    // },
    // {
    //     "name": "Leeroy",
    //     "url": "https://leeroy.io",
    //     "description": "Leeroy is a decentralized social network build on Ethereum.",
    //     "image": "https://ipfs.infura.io/ipfs/Qmb2YsYgyp6joBGJ9KrRcqGhDtbLjDdWCq3LFgv2duYReg",
    //     "category": "social"
    // },
    // {
    //     "name": "Name Bazaar",
    //     "url": "https://namebazaar.io",
    //     "description": "ENS name marketplace",
    //     "image": "https://namebazaar.io/images/logo@2x.png",
    //     "category": "marketplaces"
    // },
    // {
    //     "name": "Cryptokitties",
    //     "url": "https://www.cryptokitties.co/",
    //     "description": "Collect and breed adorable digital cats",
    //     "image": "https://www.cryptokitties.co/images/letterHead.png",
    //     "category": "games"
    // }
]


class DApps extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: marketsList };
    }

    componentWillMount() {
        const myData = [].concat(this.state.data)
          .sort((a, b) => a.category > b.category)

        let categories = {}
        myData.forEach((item) => {
          let list = categories[item.category] || []
          list.push(item)
          categories[item.category] = list
        })

        this.setState({ myData: categories });
    }

    render() {
      const keys = Object.keys(this.state.myData)
        return (
            <div className="DApps">
              {keys.map((category, index) => (
               <div key={index}>
               <h2 className="categories">{category}</h2>
                <Items key ={index} items = {this.state.myData[category]}  />
                </div>
              ))}
            </div>
        )
    }
}

class Items extends React.Component {
  render() {
      return (
          <div>
            {this.props.items.map((dapp, index) => (
                <Media key={index} className="mt-1 align">
                  <Media left bottom href={dapp.url}>
                    <img src={dapp.image} alt="logo"/>
                  </Media>
                  <Media body>
                  <Media heading>
                    <a href={dapp.url}>{dapp.name}</a>
                  </Media>
                  {dapp.description}
                  </Media>
                </Media>
              ))}
          </div>
      );
  }
}

export default DApps;