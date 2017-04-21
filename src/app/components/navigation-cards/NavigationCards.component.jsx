import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './NavigationCards.component.scss';

import {NAVIGATION_CARDS_DATA} from './../../../assets/data/home/navigation-cards/index.js';

class NavigationCards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navigationCardTitles: NAVIGATION_CARDS_DATA
        }
    }
    render() {
        return (
            <div className="navigation-cards-component col s12 m12 l12 valign-wrapper">
                <div className="navigation-card-container">
                    {
                        this.state.navigationCardTitles.map((title, index)=>{
                            return (
                                <Link to={`/${title.toLowerCase()}`} key={index}>
                                    <div className="navigation-card hvr-sweep-to-right hvr-grow col s12 m12 l6 valign-wrapper blue-grey lighten-5 z-depth-2 hoverable">
                                        <h4 className="section"> {title} </h4>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default NavigationCards;