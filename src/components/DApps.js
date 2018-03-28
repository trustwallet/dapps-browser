import React from 'react';
import '../App.css';
import { 
    Row, 
    Col
} from 'reactstrap';
import DAppItem from "./DAppItem"
import { TrustClient } from "../network/TrustClient"


class DApps extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = { data: []};
      this.trustClient = new TrustClient()
    }

    fetchList() {
        this.trustClient.fetchBootstrap().then( response => {
            this.setState({ data: response.data});
            this.sort()
        });
    }   

    sort() {
        const myData = [].concat(this.state.data.popular)
        let categories = {}
        myData.forEach((item) => {
            let id = item.category[0].name
            let list = categories[id] || []
            list.push(item)
            categories[id] = list
        })
        this.setState({ 
            myData: categories,
            today: [].concat(this.state.data.today)
        });
    }



    componentWillMount() {
        

        this.fetchList()
    }

    render() {
    console.log(this.state.myData);
      const keys = Object.keys(this.state.myData || {})
      const today = (this.state.today || []).slice(0, 3)
        return (
            <div>
                <div className="DApps">
                    <div >
                        <h2 className="categories">New dApps</h2>
                        <Items items = {today}/>
                    </div>    
                </div>
            <div className="DApps">
                {keys.map((category, index) => (
                    <div key={index} >
                    <h2 className="categories">{category}</h2>
                        <Items key ={index} items = {this.state.myData[category]}/>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}

class Items extends React.Component {
  render() {
      return (  
        <div>
            <Row>
            {this.props.items.map((dapp, index) => (
            <Col xs="12" sm="6" md="4" key={index}>
                <DAppItem item={dapp} key={index} />
                </Col>
            ))}
            </Row>
        </div>
      );
  }
}

export default DApps;
