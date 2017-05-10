import React, {Component} from 'react';

import './About.component.scss';

import PageHeader from './../../components/page-header/PageHeader.component.jsx';
import {APP_STORE} from './../../../assets/store/index.js';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentSlideIndex: 0,
            about: APP_STORE.about,
            aboutSlideshow: APP_STORE.aboutSlideshow
        }

        this.initializeCarousal();

        setInterval(() => {
            this.moveIndexForAboutSlideshow(this.state.currentSlideIndex);
        }, 5000);
    }

    initializeCarousal() {
        $(document).ready(function(){
            $('.carousel').carousel();
        });
    }

    moveIndexForAboutSlideshow(index) {
        if (index === this.state.aboutSlideshow.length-1){
            this.setState({
                currentSlideIndex: 0
            })
        }else{
            this.setState({
                currentSlideIndex: index + 1
            })
        }
    }

    render() {
        const renderAboutDetail = () => {
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
                        <div className="image-slide-container col s12 m12 l12 valign-wrapper">
                            <img src={this.state.aboutSlideshow[this.state.currentSlideIndex].photoUrl}/>
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
                        <div className="image-slide-container col s12 m12 l12 valign-wrapper">
                            <img src={this.state.aboutSlideshow[this.state.currentSlideIndex].photoUrl}/>
                        </div>
                    </section>
                    <section className="about-detail col s12">
                        <div className="card-panel blue-grey darken-3">
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
