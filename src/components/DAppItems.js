import React from 'react';
import { 
    Row, 
    Col
} from 'reactstrap';
import DAppItem from "./DAppItem"

class DAppItems extends React.Component {
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

export default DAppItems;