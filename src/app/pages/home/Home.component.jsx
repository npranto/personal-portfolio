import React, {Component} from 'react';

import './Home.component.scss';

import PortraitJumbotron from './../../components/portrait-jumbotron/PortraitJumbotron.component.jsx';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="home-component row">
                 <section className="portrait-jumbotron col s12 m6 l6">
                    <PortraitJumbotron />
                 </section>
                 <section className="navigation-cards col s12 m6 l6">
                    NavigationCards Component 
                 </section>
            </div>
            
        )
    }
}

export default Home;