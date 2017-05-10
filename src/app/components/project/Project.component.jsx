import React, {Component} from 'react';

import './Project.component.scss';

import PageHeader from './../page-header/PageHeader.component.jsx';

class Project extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentSnapshotIndex: 0,
            activeProject: JSON.parse(localStorage.getItem('activeProject')),
            activeSnapshot: null
        }

        console.log(this.state.activeProject);

        setInterval(() => {
            this.moveIndexForProjectSnapshots(this.state.currentSnapshotIndex);
        }, 3000);
    }

    componentWillMount() {
        this.initializeProjectCarousal();
        this.initializeProjectModal();

        // checks to see activeProject value
        if (this.state.activeProject === null){
            this.props.history.push('/projects');
        }
    }

    componentWillUnmount(){
        this.setState({
            activeProject: null,
            activeSnapshot: null
        })
        localStorage.clear();
        console.log('UNMOUNTED...');
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

    moveIndexForProjectSnapshots(index) {
        if (index === this.state.activeProject.projectSnapshots.length-1){
            this.setState({
                currentSnapshotIndex: 0
            })
        }else{
            this.setState({
                currentSnapshotIndex: index + 1
            })
        }
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
        // const renderProjectSnapshots = () => {
        //     return this.state.activeProject.projectSnapshots.map((snapshot, index)=>{
        //         return (
        //             <a
        //                 key={index}
        //                 className="carousel-item"
        //                 href={`#one!${index}`}
        //                 onClick={() => this.openSnapshotModal(snapshot) }
        //             ><img src={snapshot} /></a>
        //         )
        //     })
        // }

        const checkIfDemoExists = (demo) => {
            if(demo){
                return(
                    <a href={this.state.activeProject.projectDetails.projectDemoUrl} className="demo-github waves-effect waves-light pink darken-1 btn-large col s12"><i className="large material-icons">videocam</i> Demo </a>
                )
            }
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

                            <div className="image-slide-container col s12 m12 l12 valign-wrapper" data-indicators="true">
                                {/*<a*/}
                                    {/*className=""*/}
                                    {/*href={`#one!${this.state.currentSnapshotIndex}`}*/}
                                    {/*onClick={() => this.openSnapshotModal(this.state.activeProject.projectSnapshots[this.state.currentSnapshotIndex])}*/}
                                {/*>*/}
                                    <img src={this.state.activeProject.projectSnapshots[this.state.currentSnapshotIndex]} />
                                {/*</a>*/}
                            </div>


                        </section>
                        <section className="project-details valign-wrapper col s12 m12 l6">

                            <div className="card-panel blue-grey darken-3">

                                <span className="white-text">
                                    <div>
                                        { checkIfDemoExists(this.state.activeProject.projectDetails.projectDemoUrl) }
                                        <a href={this.state.activeProject.projectDetails.projectCodeUrl}  className="demo-github waves-effect waves-light pink darken-1 btn-large col s12"><i className="large material-icons">code</i> Code </a>
                                        <h4 className="project-title pacifico"> {this.state.activeProject.projectTitle} </h4>
                                    </div>
                                    <div className="divider"></div>
                                    <h5 className="subtitle-header"> What </h5>
                                    {/*<div className="divider"></div>*/}
                                    <p className="project-subtitle-description">
                                        {this.state.activeProject.projectDetails.projectWhat}
                                    </p>

                                    <h5 className="subtitle-header"> Why </h5>
                                    {/*<div className="divider"></div>*/}

                                    <p className="project-subtitle-description">
                                        {this.state.activeProject.projectDetails.projectWhy}
                                    </p>

                                    <h5 className="subtitle-header"> Contributions </h5>
                                    {/*<div className="divider"></div>*/}
                                    <div className="project-subtitle-description contributions">
                                        {
                                            this.state.activeProject.projectDetails.projectContributions.map((eachContribution, index)=>{
                                                return (
                                                    <p key={index}> <i className="material-icons">done</i> {eachContribution} </p>
                                                )
                                            })
                                        }
                                    </div>
                                </span>
                            </div>

                        </section>
                    </div>

                    <div className="mobile-project-slideshow-detail col s12 m12 l12 hide-on-large-only">
                        <section className="project-slideshow col s12">

                            <div className="image-slide-container col s12 m12 l12" data-indicators="true">
                                {/*<a*/}
                                    {/*className=""*/}
                                    {/*href={`#one!${this.state.currentSnapshotIndex}`}*/}
                                    {/*onClick={() => this.openSnapshotModal(this.state.activeProject.projectSnapshots[this.state.currentSnapshotIndex]) }*/}
                                {/*>*/}
                                    <img src={this.state.activeProject.projectSnapshots[this.state.currentSnapshotIndex]} />
                                {/*</a>*/}
                            </div>


                        </section>
                        <section className="project-detail col s12">


                            <div className="card-panel blue-grey darken-3">

                                <span className="white-text">
                                    <div>
                                        { checkIfDemoExists(this.state.activeProject.projectDetails.projectDemoUrl) }
                                        <a href={this.state.activeProject.projectDetails.projectCodeUrl} className="demo-github waves-effect waves-light pink darken-1 btn-large col s12"><i className="large material-icons">code</i> Code </a>
                                        <h4 className="project-title pacifico col s12"> {this.state.activeProject.projectTitle} </h4>
                                    </div>
                                    <div className="divider"></div>
                                    <h5 className="subtitle-header"> What </h5>
                                    {/*<div className="divider"></div>*/}
                                    <p className="project-subtitle-description">
                                        {this.state.activeProject.projectDetails.projectWhat}
                                    </p>

                                    <h5 className="subtitle-header"> Why </h5>
                                    {/*<div className="divider"></div>*/}

                                    <p className="project-subtitle-description">
                                        {this.state.activeProject.projectDetails.projectWhy} 
                                    </p>

                                    <h5 className="subtitle-header"> Contributions </h5>
                                    {/*<div className="divider"></div>*/}
                                    <div className="project-subtitle-description contributions">
                                        {
                                            this.state.activeProject.projectDetails.projectContributions.map((eachContribution, index)=>{
                                                return (
                                                    <p key={index}> <i className="material-icons">done</i> {eachContribution} </p>
                                                )
                                            })
                                        }
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