import React, {Component} from 'react';

import './Project.component.scss';

import PageHeader from './../page-header/PageHeader.component.jsx';

class Project extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeProject: JSON.parse(localStorage.getItem('activeProject'))
        }

        console.log(this.state.activeProject);
    }

    componentWillMount() {
        if (this.state.activeProject === null){
            this.props.history.push('/projects');
        }
    }

    render() {
        if (this.state.activeProject !== null){
            return (
                <div className="project-component row">
                    <PageHeader title="Projects" />

                    <div className="project-slideshow-detail col s12 m12 l12 hide-on-med-and-down">
                        <section className="project-slideshow col s12 m12 l6 valign-wrapper">
                            <div className="carousel col s12 m12 l12">
                                <h1> about-slideshow </h1>
                            </div>
                        </section>
                        <section className="project-detail valign-wrapper col s12 m12 l6">
                            <div className="card-panel blue darken-2">
                            <span className="white-text">
                                <h1> about-detail ndfjgn jdfgdfg dguyd d f ygdug yduf gd fgdfg</h1>
                            </span>
                            </div>
                        </section>
                    </div>

                    <div className="mobile-project-slideshow-detail col s12 m12 l12 hide-on-large-only">
                        <section className="project-slideshow col s12">
                            <div className="carousel col s12">
                                <h1> about-slideshow </h1>
                            </div>
                        </section>
                        <section className="project-detail col s12">
                            <div className="card-panel blue darken-2">
                            <span className="white-text">
                                <h1> about-detail fdghdfhg jdf  dfg dfg df df ydf gdfuyg dgdgu</h1>
                            </span>
                            </div>
                        </section>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

}

export default Project;