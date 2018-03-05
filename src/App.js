import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { 
  Container,
  Col 
} from 'reactstrap';
import logo from './logo_solid_square_blue.svg';
import './App.css';

import DApps from './components/DApps.js';

class ModalSwitch extends React.Component {
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props

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
      this.previousLocation !== location
    )
    return (
      <div>
        <Container>
          <header className="App-header">
            <Switch location={isModal ? this.previousLocation : location}>
              <Route exact path='/' component={Home}/>
              <Route path='/browser' component={Browser}/>
            </Switch>
            </header>
          </Container>
      </div>
    );
  }
}

const Home = () => (
  <div>
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">What is DApps Browser?</h1>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <p className="App-intro">
              It is a browser that interacts with decentralized applications on Ethereum blockchain via Web3 infrastructure.
            </p>
          </Col>
          <header className="App-btn">
            <Link to='/browser'><button id="btn">Get Started</button></Link>
          </header>
    </div>
  </div>
);

const Browser = () => (
  <div>
    <DApps>
    </DApps>
  </div>
);

const App = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
);

export default App;