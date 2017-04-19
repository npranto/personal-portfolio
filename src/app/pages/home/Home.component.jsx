import React, {Component} from 'react';

import './Home.component.scss';

import PortraitJumbotron from './../../components/portrait-jumbotron/PortraitJumbotron.component.jsx';
import NavigationCards from './../../components/navigation-cards/NavigationCards.component.jsx';

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
                 <section className="navigation-cards col s12 m6 l6 hide-on-small-and-down">
                    <NavigationCards />
                 </section>
            </div>
            
        )
    }
}

export default Home;