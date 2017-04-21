import React, {Component} from 'react';

import './About.component.scss';

import PageHeader from './../../components/page-header/PageHeader.component.jsx';
import {APP_STORE} from './../../../assets/store/index.js';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            about: APP_STORE.about
        }

        this.initializeCarousal();
    }

    initializeCarousal() {
        $(document).ready(function(){
            $('.carousel').carousel();
        });
    }

    render() {
        const renderAboutDetail = ()=>{
            return this.state.about.map((parg, index)=>{
                return (
                    <p className="about-detail-parg flow-text" key={index}> {parg} </p>
                )
            })
        }

        return (
            <div className="about-component row">
                 <PageHeader title="About" />

                 <div className="about-slideshow-detail col s12 m12 l12 hide-on-small-and-down">
                    <section className="about-slideshow col s12 m6 l6 valign-wrapper">
                        <div className="carousel col s12 m12 l12">
                            <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/food/1" /></a>
                            <a className="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/5" /></a>
                            <a className="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/food/1" /></a>
                            <a className="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/1" /></a>
                            <a className="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/food/1" /></a>
                        </div>
                    </section>
                    <section className="about-detail valign-wrapper col s12 m6 l6">
                        <div className="card-panel blue darken-2">
                            <span className="white-text">
                                {renderAboutDetail()}
                            </span>
                        </div>
                    </section>
                 </div>

                 <div className="mobile-about-slideshow-detail col s12 m12 l12 hide-on-med-and-up">
                    <section className="about-slideshow col s12">
                        <div className="carousel col s12 m12 l12">
                            <a className="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/food/1" /></a>
                            <a className="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/5" /></a>
                            <a className="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/food/1" /></a>
                            <a className="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/1" /></a>
                            <a className="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/food/1" /></a>
                        </div>
                    </section>
                    <section className="about-detail col s12">
                        <div className="card-panel blue darken-2">
                            <span className="white-text">
                                {renderAboutDetail()}
                            </span>
                        </div>
                    </section>
                 </div>
            </div>
        )
    }
}

export default About;
