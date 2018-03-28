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
        let sections = {}
        myData.forEach((item) => {
            let category = item.category[0]
            let id = category.order
            let section = sections[id] || {category, list: []}
            let list = section.list
            list.push(item)
            sections[id] = section
        })

        this.setState({ 
            myData: sections,
            today: [].concat(this.state.data.today)
        });
    }



    componentWillMount() {
        this.fetchList()
    }

    render() {
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
                    <div key={category} >
                    <h2 className="categories">{this.state.myData[category].category.name}</h2>
                        <Items key ={category} items = {this.state.myData[category].list}/>
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
