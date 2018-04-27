import React from 'react';
import {
    Media
} from 'reactstrap';

class DAppItem extends React.Component {
    render() {
        const item = this.props.item
        const url = item.url
        return (
            <Media className="dappItem" tag="a" href={url}>
                <Media className="mt-1 align media-block">
                    <Media bottom>
                        <img src={item.image} alt="logo" className="media-logo" />
                    </Media>
                    <Media body>
                        <Media heading>
                            {item.name}
                        </Media>
                        {item.description}
                    </Media>
                </Media>
            </Media>
        )
    }
}

export default DAppItem;