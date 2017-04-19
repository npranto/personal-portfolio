import React, {Component} from 'react';

import './PortraitJumbotron.component.scss';

import portrait from './../../../assets/images/portrait_placeholder.png';

class PortraitJumbotron extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="portrait-jumbotron-component col s12 m6 l6">
                <div className="portrait-name-position">
                    <img src={portrait} alt="portrait" />
                </div>
            </div>
        )
    }
}

export default PortraitJumbotron;