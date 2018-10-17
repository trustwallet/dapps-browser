import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';

class DAppItem extends React.Component {
  render() {
    const { image, name, description } = this.props.item

    return (
      <div>
        <Link to={{
          pathname: `/${name}`,
          state: {
            dapp: this.props.item
          }
        }}>
          <Media className="dappItem">
            <Media className="mt-1 align media-block">
              <Media bottom>
                <img src={image} alt="logo" className="media-logo" />
              </Media>
              <Media body>
                <Media heading>
                  {name}
                </Media>
                {description}
              </Media>
            </Media>
          </Media>
        </Link>
      </div>
    );
  }
}

export default DAppItem;
