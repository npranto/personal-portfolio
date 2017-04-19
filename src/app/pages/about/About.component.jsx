import React, {Component} from 'react';

import './About.component.scss';

import PageHeader from './../../components/page-header/PageHeader.component.jsx';


class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            aboutDetail: [
                'Junior at the University of Massachusetts Boston, pursuing bachelor\'s degree in Computer Science. I am very passionate, endurable, dedicated, and a self-motivated individual eager to learn and develop technical skills through entry-level internship experiences.',
                'As a computer science student, I tend to look at the world in a logical perspective where problems are needed to be solved and solved very quickly with creative tactics. I am very passionate about problem solving and enjoy diving into challenges that truly matters for the people and society. Thus, I chose to pursue my educational career in computer science. However, I believe that I am a go-getter as well and the traditional computer science education where heavy theoretical approach is exercised is not what I adore the most. In addition, I consider a more hands-on, practical experience where learning to code is acquired from series of trials and mistakes.',
                'After a solid introduction to web development from DevMountain, a full-time web immersive program, I learned the value of functional learning and building real world products that can improve people\'s lives. Along with logical aspects of web development, I am also very much interested in design and user-experience as well.',
                'As I move forward, I want to continue working towards my bachelor\'s degree and also broaden my communication skills in a team-oriented environment while continuing to explore, practice and hopefully master computer programming fundamentals and web development tools and frameworks to prepare for an exciting career in web development or software engineering near future.'  
            ]  
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
            return this.state.aboutDetail.map((parg, index)=>{
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
