import React, {Component} from 'react';

import './NavigationCards.component.scss';

class NavigationCards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="navigation-cards-component col s12 m12 l12 valign-wrapper">
                <div className="navigation-card-container">
                    <a href="https://www.google.com">
                        <div className="navigation-card hvr-sweep-to-right hvr-grow col s12 m12 l6 valign-wrapper blue-grey lighten-5 z-depth-2 hoverable">
                            <h4 className="section"> About </h4>
                        </div>
                    </a>
                    <a href="https://www.google.com">
                        <div className="navigation-card hvr-sweep-to-right hvr-grow col s12 m12 l6 valign-wrapper blue-grey lighten-5 z-depth-2 hoverable">
                            <h4 className="section"> Projects </h4>
                        </div>
                    </a>
                    <a href="https://www.google.com">
                        <div className="navigation-card hvr-sweep-to-right hvr-grow col s12 m12 l6 valign-wrapper blue-grey lighten-5 z-depth-2 hoverable">
                            <h4 className="section"> Experience </h4>
                        </div>
                    </a>
                    <a href="https://www.google.com">
                        <div className="navigation-card hvr-sweep-to-right hvr-grow col s12 m12 l6 valign-wrapper blue-grey lighten-5 z-depth-2 hoverable">
                            <h4 className="section"> Skills </h4>
                        </div>
                    </a>
                    <a href="https://www.google.com">
                        <div className="navigation-card hvr-sweep-to-right hvr-grow col s12 m12 l6 valign-wrapper blue-grey lighten-5 z-depth-2 hoverable">
                            <h4 className="section"> Education </h4>
                        </div>
                    </a>
                    <a href="https://www.google.com">
                        <div className="navigation-card hvr-sweep-to-right hvr-grow col s12 m12 l6 valign-wrapper blue-grey lighten-5 z-depth-2 hoverable">
                            <h4 className="section"> Connect </h4>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default NavigationCards;