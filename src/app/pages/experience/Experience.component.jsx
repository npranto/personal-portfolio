import React, {Component} from 'react';

import './Experience.component.scss';

import lexiaLearningLogo from './../../../assets/images/experiences/lexia_learning_logo.png';

import PageHeader from './../../components/page-header/PageHeader.component.jsx';

class Experience extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="experience-component row">
                <PageHeader title="Experience" />

                <div className="card col s8 m4 l4 offset-s2 hoverable">
                    <div className="card-image center waves-effect waves-block waves-light img-container">
                        <img className="activator resize-horizontal resize-vertical" src={lexiaLearningLogo} />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4"> Junior Software Engineer <i className="material-icons right">more_vert</i></span>
                        <p><a href="http://www.lexialearning.com/"> Lexia Learning </a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4"> Lexia Learning <i className="material-icons right">close</i></span>
                        <p className="duration"> September - December, 2016 </p>
                        <p className="location"> Concord, MA </p>
                        <div className="divider"></div>
                        <div className="description">
                            <p>
                                Built multiple JSON Schemas for large JSON object files to structure task flow and resolved minor bug fixes in the application build process.
                            </p>
                            <p>
                                Drafted and compiled functional scripts to automate JSON file modifications using application components, JavaScript prototypes and node dependencies, which essentially simplified and fastened the substantial modification process in application content.
                            </p>
                            <p>
                                Experienced in agile software development methodology, specifically the Scrum process framework concepts and practices.
                            </p>
                        </div>
                    
                        <ul className="collection">
                            <li className="collection-item avatar">
                                <i className="material-icons circle red">forum</i>
                                <span className="title recommender-name"> <strong> Brian Penney </strong> </span>
                                <p className="recommender-description"> 
                                    MIT IS&T Infrastructure engineer <br />
                                    March 28, 2017
                                </p>
                                <blockquote>
                                    &#8220;Nazmuz Shakib Pranto worked with me over the summer of 2015. He was always prompt, and dependable. He paid attention to detail, and always went above and beyond when completing assignments. It was my pleasure to have him work for my department over the summer, and I hold him in high regards. I would gladly recommend him for employment to anyone interested. Best of luck!&#8220;                          
                                </blockquote>
                            </li>
                        </ul>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default Experience;