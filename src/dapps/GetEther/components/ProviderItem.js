import React from 'react';
import { Media } from 'reactstrap';

class ProviderItem extends React.Component {
  render() {
    const item = this.props.item;
    const url = item.url(this.props.address);

    return (
      <a className="providerItem" href={url}>
        <Media className="mt-1 align media-block">
          <Media left bottom>
            <img src={item.image} alt="logo" className="media-logo" />
          </Media>
          <Media body>
            <Media heading>
              {item.name}
            </Media>
            {/* <Media>
                            {item.description}
                        </Media> */}
            <Media>
              <b>Fees</b> : {item.fees}
            </Media>
            <Media>
              <b>Limits </b> : {item.limits}
            </Media>
            <Media>
              <b>Delivery </b> : {item.delivery}
            </Media>
          </Media>
        </Media>
      </a>
    );
  }
}

export default ProviderItem;
