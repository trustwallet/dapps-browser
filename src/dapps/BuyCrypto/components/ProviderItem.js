import React from 'react';
import { Media } from 'reactstrap';

class ProviderItem extends React.Component {
  render() {
    const item = this.props.item;
    const url = item.url(this.props.address);

    return (
      <Media className="providerItem" tag="a" href={url}>
        <Media className="mt-1 align media-block">
          <Media bottom>
            <img src={item.image} alt="logo" className="media-logo" />
          </Media>
          <Media body>
            <Media heading>
              {item.name}
            </Media>
            <Media>
                {item.description}
            </Media>
            <Media>
              <b>Fees</b> : {item.fees}. {item.delivery}
            </Media>
          </Media>
        </Media>
      </Media>
    );
  }
}

export default ProviderItem;
