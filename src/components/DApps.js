import React from 'react';
import '../App.css';
import { 
    Row, 
    Col,
} from 'reactstrap';
import {
    Link,
} from 'react-router-dom'
import DAppItems from "./DAppItems"
import { TrustClient } from "../network/TrustClient"

class DApps extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = { data: []};
      this.trustClient = new TrustClient()
    }

    fetch() {
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
        this.fetch()
    }

    render() {
      const keys = Object.keys(this.state.myData || {})
      const today = (this.state.today || []).slice(0, 3)
        return (
            <div>
                <div className="DApps">
                    <div >
                        <Link to={"category/5abcceb4682db901241a0636"}>
                            <h2 className="categories">New dApps</h2>
                        </Link>
                        <DAppItems items = {today}/>
                    </div>    
                </div>
            <div className="DApps">
                {keys.map((category, index) => (
                    <div key={category}>
                    <Link to={"category/" + this.state.myData[category].category._id}>
                        <h2 className="categories">{this.state.myData[category].category.name}</h2>
                    </Link>
                        <DAppItems key ={category} items = {this.state.myData[category].list}/>
                    </div>
                ))}
            </div>
            <Footer configuration={{show: (keys.length !== 0)}}/>
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        const show = this.props.configuration.show
        if (show) {
            return (
                <div>
                    <hr />
                    <div class="footer">
                        <center>
                            We do not control, or endorse the Dapps listed, simply provide them as a list of convenience for you. Please investigate and Play at your own Risk.
                        </center>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default DApps;
