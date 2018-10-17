import React from 'react';
import { Media} from 'reactstrap';
import { trunc } from '../utils/utils';
import { Link } from "react-router-dom";

class DAppCard extends React.Component {
  render() {
    const { image, name, description} = this.props.item

    return (
      <div>
        <Link to={{
          pathname: `/${name}`,
          state: {
            dapp: this.props.item
          }
        }}>
          <Media>
            <div className="card-body">
              <img src={image} alt="logo" className="media-card-logo" />
              <p className="card-body-title">{name}</p>
              <p className="card-body-description">{trunc(description, 80, true)}</p>
            </div>
          </Media>
        </Link>
      </div>
    );
  }
}

export default DAppCard;
