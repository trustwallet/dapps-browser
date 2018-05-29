import React from 'react';
import DAppCard from './DAppCard';

class DAppTopCards extends React.Component {
  render() {
    return (
      <div className="cards-row">
        {this.props.items.map((dapp, index) => (
          <DAppCard item={dapp} key={index} />
        ))}
      </div>
    );
  }
}

export default DAppTopCards;
