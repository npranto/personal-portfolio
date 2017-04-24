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

                            <div className="carousel" data-indicators="true">
                                {renderProjectSnapshots()}
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

                            <div className="carousel" data-indicators="true">
                                {renderProjectSnapshots()}
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