import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

class ContactUs extends React.Component {
  render() {
    return (
      <ListGroup className="contact-us-group">
        <h1>Contact Us</h1>
        <ListGroupItem>
          <i className="fab fa-app-store-ios fa-2x" />
          <Link className="contact-us-div" to="https://goo.gl/forms/GEVXRc2QSLVuOnMb2" target="_blank">
            Submit DApp
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <i className="fab fa-twitter fa-2x" />
          <Link className="contact-us-div" to="https://twitter.com/TrustWalletApp" target="_blank">
                        Twitter
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <i className="fab fa-facebook fa-2x" />
          <Link className="contact-us-div" to="https://www.facebook.com/trustwalletapp/" target="_blank">
                        Facebook
          </Link>
        </ListGroupItem>
        <ListGroupItem>
          <i className="fas fa-envelope fa-2x" />
          <span className="contact-us-div">
                        Email: support@trustwalletapp.com
          </span>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default ContactUs;
