import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './NavigationBar.component.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);

        this.initializeSideNav();
    }

    initializeSideNav() {
        $(document).ready(function(){
            $('.button-collapse').sideNav({
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
            });
            $(".button-collapse-large").sideNav();
        })
    }

    render() {
        return (
            <div className="navigation-bar-component col s12 m12 l12">
                <nav>
                    <div className="nav-wrapper">
                    <a href="/" className="brand-logo center pacifico"> nsp </a>
                    <a href="/" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a data-activates="mobile-demo" className="button-collapse-large"><i className="material-icons">menu</i></a></li>
                    </ul>
                    <ul className="side-nav center" id="mobile-demo">
                        <li><Link to="/"> Home </Link></li>
                        <li><Link to="/about"> About </Link></li>
                        <li><Link to="/projects"> Projects </Link></li>
                        <li><Link to="/experience"> Experience </Link></li>
                        <li><Link to="/skills"> Skills </Link></li>
                        <li><Link to="/education"> Education </Link></li>
                        <li><Link to="/connect"> Connect </Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavigationBar;