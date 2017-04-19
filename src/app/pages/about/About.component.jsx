import React, {Component} from 'react';

import './About.component.scss';

import slide1 from './../../../assets/images/social-logos/github_logo.png';
import slide2 from './../../../assets/images/social-logos/linkedin_logo.png';
import slide3 from './../../../assets/images/social-logos/npm_logo.png';
import slide4 from './../../../assets/images/social-logos/linkedin_logo.png';
import slide5 from './../../../assets/images/social-logos/github_logo.png';


class About extends Component {
    constructor(props) {
        super(props);

        this.initializeCarousal();
    }

    initializeCarousal() {
        $(document).ready(function(){
            $('.carousel').carousel();
        });
    }

    render() {
        return (
            <div className="about-component row">
                 <section className="about-header col s12 m12 l12">
                    <h3> About </h3>
                    <div className="divider"></div>
                 </section>
                 <section className="about-slideshow col s12 m6 l6 valign-wrapper">
                    <div className="carousel col s12 m12 l12">
                        <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/food/1" /></a>
                        <a className="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/5" /></a>
                        <a className="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/food/1" /></a>
                        <a className="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/1" /></a>
                        <a className="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/food/1" /></a>
                    </div>
                 </section>
                 <section className="about-detail col s12 m6 l6">
                    
                 </section>
            </div>
        )
    }
}

export default About;
