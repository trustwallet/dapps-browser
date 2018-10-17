import React from 'react';
import { Media } from 'reactstrap';
import { trunc } from '../utils/utils';

class DAppCard extends React.Component {
  render() {
    const { url, image, name, description} = this.props.item

    return (
      <Media tag="a" href={url}>
        <div className="card-body">
          <img src={image} alt="logo" className="media-card-logo" />
          <p className="card-body-title">{name}</p>
          <p className="card-body-description">{trunc(description, 80, true)}</p>
        </div>
      </Media>
    );
  }
}

export default DAppCard;
