import React from 'react';
import {
    Media
} from 'reactstrap';

class DAppItem extends React.Component {
    render() {
        const item = this.props.item
        const url = item.url + "?utm_source=trustwalletapp.com"
        return (
            <a href={url}>
                <Media className="mt-1 align media-block">
                <Media left bottom>
                    <img src={item.image} alt="logo" className="media-logo"/>
                </Media>
                <Media body>
                <Media heading>
                    {item.name}
                </Media>
                {item.description}
                </Media>
                </Media>
            </a>
        )
    }
}

export default DAppItem;