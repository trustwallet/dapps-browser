import React from 'react';
import { Media } from 'reactstrap';
import { trunc } from '../utils/utils';

class DAppCard extends React.Component {
  render() {
    const item = this.props.item;
    const url = item.url;
    return (
      <Media tag="a" href={url}>
        <div className="card-body">
          <img src={item.image} alt="logo" className="media-card-logo" />
          <p className="card-body-title">{item.name}</p>
          <p className="card-body-description">{trunc(item.description, 80, true)}</p>
        </div>
      </Media>
    );
  }
}

export default DAppCard;
