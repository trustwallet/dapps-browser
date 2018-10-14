import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

function ContactUs() {
  return (
    <ListGroup className="contact-us-group">
      <h1>Contact Us</h1>
      <ListGroupItem>
        <i className="fab fa-app-store-ios fa-2x" />
        <a className="contact-us-div" href="https://goo.gl/forms/GEVXRc2QSLVuOnMb2" rel="noopener noreferrer" target="_blank">Submit DApp</a>
      </ListGroupItem>
      <ListGroupItem>
        <i className="fab fa-twitter fa-2x" />
        <a className="contact-us-div" href="https://twitter.com/TrustWalletApp" rel="noopener noreferrer" target="_blank">Twitter</a>
      </ListGroupItem>
      <ListGroupItem>
        <i className="fab fa-facebook fa-2x" />
        <a className="contact-us-div" href="https://www.facebook.com/trustwalletapp/" rel="noopener noreferrer" target="_blank">Facebook</a>
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

export default ContactUs;
