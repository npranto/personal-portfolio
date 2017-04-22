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
                                A customized slack bot integration and an application that connects recruiters and candidates to
                                fill technical positions through the slack app.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Projects;