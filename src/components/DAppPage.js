import React from 'react';
import { CardText, CardImg, Button} from "reactstrap";

class DAppPage extends React.Component {
    render() {
        console.log(this.props)
        const { 
            description,
            image,
            page_image, 
            name, 
            url } = this.props.location.state.dapp

        return (
            <div>
              <CardImg width="100%" src={page_image ? page_image : image} alt="DApp page"></CardImg>
              <CardText width="100%" color="danger">{description}</CardText>
              <Button outline size="sm" color="primary" href={url}>visit {name}</Button>
            </div>
        )
    }
}

export default DAppPage;