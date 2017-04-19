import React, {Component} from 'react';

import './Skills.component.scss';

import PageHeader from './../../components/page-header/PageHeader.component.jsx';

class Skills extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="about-component row">
                 <PageHeader title="Skills" />
                 
            </div>
        )
    }
}

export default Skills;