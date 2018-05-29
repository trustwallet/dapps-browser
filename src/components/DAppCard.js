import React from 'react';
import { Media } from 'reactstrap';

// description truncate
String.prototype.trunc = function (n, useWordBoundary) {
  if (this.length <= n) { return this; }
  const subString = this.substr(0, n - 1);
  return `${useWordBoundary
    ? subString.substr(0, subString.lastIndexOf(' '))
    : subString}...`;
};

class DAppCard extends React.Component {
  render() {
    const item = this.props.item;
    const url = item.url;
    return (
      <Media tag="a" href={url}>
        <div className="card-body">
          <img src={item.image} alt="logo" className="media-card-logo" />
          <p className="card-body-title">{item.name}</p>
          <p className="card-body-description"> {item.description.trunc(80, true)}</p>
        </div>
      </Media>
    );
  }
}

export default DAppCard;
