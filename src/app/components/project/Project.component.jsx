import React, {Component} from 'react';

import './Project.component.scss';

import PageHeader from './../page-header/PageHeader.component.jsx';

class Project extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeProject: JSON.parse(localStorage.getItem('activeProject')),
            activeSnapshot: null
        }

        console.log(this.state.activeProject);
    }

    componentWillMount() {
        this.initializeProjectCarousal();
        this.initializeProjectModal();

        // checks to see activeProject value
        if (this.state.activeProject === null){
            this.props.history.push('/projects');
        }
    }

    initializeProjectCarousal() {
        $(document).ready(function(){
            $('.carousel').carousel();
        });
    }

    initializeProjectModal() {
        $(document).ready(function(){
            $('.modal').modal();
        });
    }

    openSnapshotModal(snapshot) {
        console.log(snapshot);
        this.setState({
            activeSnapshot: snapshot
        })
        $(document).ready(function(){
            // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
            $('#modal1').modal('open');
        });

    }

    render() {
        const renderProjectSnapshots = () => {
            return this.state.activeProject.projectSnapshots.map((snapshot, index)=>{
                return (
                    <a
                        key={index}
                        className="carousel-item"
                        href={`#one!${index}`}
                        onClick={() => this.openSnapshotModal(snapshot) }
                    ><img src={snapshot} /></a>
                )
            })
        }


        if (this.state.activeProject !== null){
            return (
                <div className="project-component row">
                    <PageHeader title="Projects" />

                    {/*snapshot modal    */}
                    <div id="modal1" className="modal center valign-wrapper">
                        <img src={this.state.activeSnapshot} />
                    </div>

                    <div className="project-slideshow-detail col s12 m12 l12 hide-on-med-and-down">
                        <section className="project-slideshow col s12 m12 l6 valign-wrapper">

                            <div className="carousel col s12 m12 l12" data-indicators="true">
                                {renderProjectSnapshots()}
                            </div>


                        </section>
                        <section className="project-details valign-wrapper col s12 m12 l6">

                            <div className="card-panel blue-grey darken-3">

                                <span className="white-text">
                                    <div>
                                        <a className="demo-github waves-effect waves-light btn"> Demo </a>
                                        <a className="demo-github waves-effect waves-light btn"> GitHub </a>
                                        <h4 className="project-title pacifico"> Deed </h4>
                                    </div>
                                    <div className="divider"></div>
                                    <h5 className="subtitle-header"> What </h5>
                                    {/*<div className="divider"></div>*/}
                                    <p className="project-subtitle-description">
                                        Deed is a mini social networking web application that anyone can use to share their good deeds throughout the day.
                                        Users will be able to post, share and be inspired by other's deeds on their home feed.
                                    </p>

                                    <h5 className="subtitle-header"> Why </h5>
                                    {/*<div className="divider"></div>*/}

                                    <p className="project-subtitle-description">
                                        Deed is an user generated content based social platform that aims to help people move away from the single circle of
                                        friends and their stories trend and rather open a new ground for people to share new perspectives with new individuals
                                        everyday to inspire people and to create a positive outlook for the world around us. </p>

                                    <h5 className="subtitle-header"> Contributions </h5>
                                    {/*<div className="divider"></div>*/}
                                    <div className="project-subtitle-description contributions">
                                        <p> <i className="material-icons">done</i> Built full application from the front to the back end in three weeks </p>
                                        <p> <i className="material-icons">done</i> Implemented with HTML/CSS, AngularJS and Bootstrap for the client side </p>
                                        <p> <i className="material-icons">done</i> Used Express, Node.JS on the server side and MongoDB for database setup  </p>
                                    </div>
                                </span>
                            </div>

                        </section>
                    </div>

                    <div className="mobile-project-slideshow-detail col s12 m12 l12 hide-on-large-only">
                        <section className="project-slideshow col s12">

                            <div className="carousel" data-indicators="true">
                                {renderProjectSnapshots()}
                            </div>

                        </section>
                        <section className="project-detail col s12">


                            <div className="card-panel blue-grey darken-3">
                                <span className="white-text">
                                    <h5 className="project-title pacifico"> Deed </h5>

                                    <div className="divider"></div>
                                    <h5 className="subtitle-header"> What </h5>
                                    {/*<div className="divider"></div>*/}
                                    <p className="project-subtitle-description">
                                        Deed is a mini social networking web application that anyone can use to share their good deeds throughout the day.
                                        Users will be able to post, share and be inspired by other's deeds on their home feed.
                                    </p>

                                    <h5 className="subtitle-header"> Why </h5>
                                    {/*<div className="divider"></div>*/}

                                    <p className="project-subtitle-description">
                                        Deed is an user generated content based social platform that aims to help people move away from the single circle of
                                        friends and their stories trend and rather open a new ground for people to share new perspectives with new individuals
                                        everyday to inspire people and to create a positive outlook for the world around us. </p>

                                    <h5 className="subtitle-header"> Contributions </h5>
                                    {/*<div className="divider"></div>*/}
                                    <div className="project-subtitle-description contributions">
                                        <p> <i className="material-icons">done</i> Built full application from the front to the back end in three weeks </p>
                                        <p> <i className="material-icons">done</i> Implemented with HTML/CSS, AngularJS and Bootstrap for the client side </p>
                                        <p> <i className="material-icons">done</i> Used Express, Node.JS on the server side and MongoDB for database setup  </p>
                                    </div>

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