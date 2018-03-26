import React from 'react';
import '../App.css';
import { 
    Row, 
    Col
} from 'reactstrap';
import DAppItem from "./DAppItem"

export const marketsList = [
    {
        "name": "Etheremon",
        "url": "https://www.etheremon.com/",
        "description": "Digital world of monsters.",
        "image": "/assets/etheremon.png",
        "category": "games"
    },
    {
        "name": "Token Store",
        "url": "https://token.store",
        "description": "Decentralized exchange for ERC-20 tokens with an off-chain orderbook.",
        "image": "/assets/token.store.png",
        "category": "exchanges"
    },
    {
        "name": "CryptoFighters",
        "url": "https://cryptofighters.io/",
        "description": "Digital fighters on the blockchain.",
        "image": "/assets/cryptoFighters.png",
        "category": "games"
    },
    {
        "name": "Etherbay",
        "url": "https://www.etherbay.com/",
        "description": "Buy & Sell Crypto Assets",
        "image": "/assets/efolio.png",
        "category": "marketplaces"
    },
    {
        "name": "Token Factory",
        "url": "https://tokenfactory.netlify.com/",
        "description": "Issue & Interact with Standard Token Contracts on Ethereum.",
        "image": "https://tokenfactory.netlify.com/images/icon.png",
        "category": "utility"
    },
    {
        "name": "OpenSea",
        "url": "https://opensea.io/",
        "description": "Peer-to-peer marketplace for rare digital items",
        "image": "https://opensea.io/static/images/opensea-icon.png",
        "category": "marketplaces"
    },
    {
        "name": "RareBits",
        "url": "https://rarebits.io/",
        "description": "Buy, sell, and discover unique crypto assets",
        "image": "/assets/rarebits.png",
        "category": "marketplaces"
    },
    {
        "name": "Name Bazaar",
        "url": "https://namebazaar.io",
        "description": "ENS name marketplace",
        "image": "https://namebazaar.io/images/logo@2x.png",
        "category": "marketplaces"
    },
    {
        "name": "Cryptokitties",
        "url": "https://www.cryptokitties.co/",
        "description": "Collect and breed adorable digital cats",
        "image": "https://www.cryptokitties.co/images/letterHead.png",
        "category": "games"
    },
    {
        "name": "Kyber Network",
        "url": "https://web3.kyber.network",
        "description": "Decentralized exchange for ERC20 tokens",
        "image": "/assets/kyber.png",
        "category": "exchanges"
    },
    {
        "name": "The Bancor Network",
        "url": "https://www.bancor.network",
        "description": "Decentralized exchange for ERC20 tokens",
        "image": "/assets/bancor.png",
        "category": "exchanges"
    },
    {
        "name": "ERC dEX",
        "url": "https://ercdex.com/",
        "description": "Decentralized exchange powered by 0x protocol",
        "image": "/assets/ercdex.png",
        "category": "exchanges"
    },
    {
        "name": "Crypto Racing League",
        "url": "https://cryptoracingleague.io/",
        "description": "Race Card. Collectable cars on the blockchain.",
        "image": "/assets/cryptoracing.png",
        "category": "games"
    },
    {
        "name": "EtherBots",
        "url": "https://etherbots.io",
        "description": "Decentralised Robot Wars Game",
        "image": "/assets/etherbots.png",
        "category": "games"
    }
]

class DApps extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: marketsList};
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
                <div key={index} >
                <h2 className="categories">{category}</h2>
                    <Items key ={index} items = {this.state.myData[category]}/>
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
            <Row>
            {this.props.items.map((dapp, index) => (
            <Col xs="12" sm="6" md="4" key={index}>
                <DAppItem item={dapp} key={index} />
                </Col>
            ))}
            </Row>
        </div>
      );
  }
}

export default DApps;
