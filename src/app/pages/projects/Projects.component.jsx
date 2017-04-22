import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Projects.component.scss';

import snapshot1 from './../../../assets/images/projects/deed/snapshot1.png';

import PageHeader from './../../components/page-header/PageHeader.component.jsx';

class Projects extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="projects-component row">
                <PageHeader title="Projects" />

                <div className="col s12 m6 l4 projects-gallery">
                    <div className="card hoverable">
                        <div className="card-image">
                            <img src={snapshot1} className="img-responsive" />
                                <span className="card-title">  </span>
                                <Link to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">visibility</i></Link>
                        </div>
                        <div className="card-content">
                            <h4> <Link to="/"> Deed </Link> </h4>
                            <p>
                                A mini social networking app that anyone can use to share their good deeds throughout the day.
                                Users will be able to post, share and be inspired by other's deeds on their home feed. Deed is an
                                user generated content based app that aims to break a single circle of friends and their stories,
                                rather opens new perspectives from new individuals everyday to create a positive outlook for the
                                world around us.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Projects;