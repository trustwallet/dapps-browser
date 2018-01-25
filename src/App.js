import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import {
    Media
} from 'reactstrap';
import logo from './logo_solid_square_blue.png';
import './App.css';

class ModalSwitch extends React.Component {
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route exact path='/' component={Home}/>
          <Route path='/browser' component={Browser}/>
        </Switch>
      </div>
    )
  }
}

const Home = () => (
  <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">What is the DApps?</h1>
        <p className="App-intro">
        DApps is an acronym for remembering the five qualities for effective goals of Dated, Achievable, Personal, Positive and Specific. Dated: Effective goals have specific deadlines. Short-term goals have deadlines of a few months. A long-term goal has a deadline of a year or more on up to 10 years.
        </p>
      </header>
    <Link to='/browser'><button id="btn">Get Started</button></Link>
    </div>
  </div>
)

const Browser = () => (
  <div>
  <h1 className="title">DApp Browser</h1>
  <h2 className="categories">Games</h2>
    <Media className="mt-1">
      <Media left top href="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Media>
      <Media body>
        <Media heading>
          Cryptokitties
        </Media>
        Collect and breed adorable digital cats.
      </Media>
    </Media>

    <Media className="mt-1">
      <Media left middle href="/">
      <img src={logo} className="App-logo" alt="logo" />
      </Media>
      <Media body>
        <Media heading>
          CryptoPunks
        </Media>
        10,000 unique collectible punks.
      </Media>
    </Media>

    <Media className="mt-1">
      <Media left bottom href="/">
      <img src={logo} className="App-logo" alt="logo" />
      </Media>
      <Media body>
        <Media heading>
          Funfair Demo
        </Media>
        3D blockchain casino demo (testnet)
      </Media>
    </Media>

    <Media className="mt-1">
      <Media left bottom href="/">
      <img src={logo} className="App-logo" alt="logo" />
      </Media>
      <Media body>
        <Media heading>
          Tug of War
        </Media>
        A fully decentralized 2 player game.
      </Media>
    </Media>

    <h2 className="categories">Marketplaces</h2>
    <Media className="mt-1">
      <Media left bottom href="/">
      <img src={logo} className="App-logo" alt="logo" />
      </Media>
      <Media body>
        <Media heading>
          Ethlance
        </Media>
        Hire or work for Ether.
      </Media>
    </Media>

    <Media className="mt-1">
      <Media left bottom href="/">
      <img src={logo} className="App-logo" alt="logo" />
      </Media>
      <Media body>
        <Media heading>
          Name Bazaar
        </Media>
        ENS name marketplace
      </Media>
    </Media>
  </div>
);

const App = () => (
    <Router>
      <Route component={ModalSwitch} />
    </Router>

)

export default App;