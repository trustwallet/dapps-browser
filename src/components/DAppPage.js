import React from 'react';
import { Card, CardLink, CardBody, CardText } from "reactstrap";

class DAppPage extends React.Component {
    render() {
        console.log(this.props)
        const { description, digitalGood, image, name, url, networks } = this.props.location.state.dapp

        return (
            <div>
            <Card>
              <img width="100%" src={image} />
              <CardBody >
                <CardText>{description}</CardText>
                <CardLink href="#">Visit DApp</CardLink>
              </CardBody>
            </Card>
          </div>
        );
    }
}

export default DAppPage;