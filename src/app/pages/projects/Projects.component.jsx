import React, {Component} from 'react';
import {Link, matchPath, Route} from 'react-router-dom';

import './Projects.component.scss';

import PageHeader from './../../components/page-header/PageHeader.component.jsx';
import {APP_STORE} from './../../../assets/store/index.js';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: APP_STORE.projects
        }
    }
    render() {

        const renderProjects = () => {
            return this.state.projects.map((project, index)=>{
                return (
                    <div className="col s12 m6 l4 card hoverable" key={index}>
                        <div className="card-image">
                            <img src={project.projectSnapshot} className="img-responsive" />
                            <span className="card-title">  </span>
                            <Link to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">visibility</i></Link>
                        </div>
                        <div className="card-content">
                            <h4 className="project-title"> <Link to="/"> {project.projectTitle} </Link> </h4>
                            <p className="project-description">
                                {project.projectDescription}
                            </p>
                            <span> ... <a onClick={()=>{
                                localStorage.setItem('activeProject', JSON.stringify(project));
                                this.props.history.push('/project@deed');
                            }}> read more </a></span>
                        </div>
                    </div>
                )
            })
        }

        return (
            <div className="projects-component row">
                <PageHeader title="Projects" />

                <div className="col s12 m12 l12 projects-gallery">
                    {
                        // each project card
                        renderProjects()
                    }
                </div>

            </div>
        )
    }
}

export default Projects;