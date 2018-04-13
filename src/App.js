import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import {
  Container,
} from 'reactstrap';
import './App.css';
import DApps from './components/DApps.js';
import DAppsCategory from './components/DAppsCategory.js';
import ContactUs from "./components/ContactUs.js"

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
              <Route exact path='/' component={Browser} />
              <Route path='/browser' component={Browser} />
              <Route path='/category/:id' component={DAppsCategoryComponent} />
              <Route path='/contact-us' component={ContactUs} />
            </Switch>
          </header>
        </Container>
      </div>
    );
  }
}

const Browser = () => (
  <div>
    <DApps>
    </DApps>
  </div>
);

const DAppsCategoryComponent = ({ match }) => (
  <div>
    <DAppsCategory id={match.params.id}>
    </DAppsCategory>
  </div>
);

const App = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
);

export default App;