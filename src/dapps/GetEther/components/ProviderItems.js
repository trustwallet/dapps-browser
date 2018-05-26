import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import ProviderItem from './ProviderItem';

class ProviderItems extends React.Component {
  render() {
    return (
      <div>
        <Row>
          {this.props.items.map((dapp, index) => (
            <Col xs="12" sm="6" md="4" key={index}>
              <ProviderItem item={dapp} key={index} address={this.props.address} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default ProviderItems;
