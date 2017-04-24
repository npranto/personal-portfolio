import React, {Component} from 'react';

import './Project.component.scss';

class Project extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeProject: JSON.parse(localStorage.getItem('activeProject'))
        }

        console.log(this.state.activeProject);
    }

    render() {
        return (
            <div className="project-component">
                <h1> {this.state.activeProject.projectTitle} </h1>
            </div>
        )
    }

}

export default Project;