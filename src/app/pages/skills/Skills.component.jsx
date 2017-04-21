import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip'

import './Skills.component.scss';

import PageHeader from './../../components/page-header/PageHeader.component.jsx';
import {APP_STORE} from './../../../assets/store/index.js';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frontEndTechs: APP_STORE.frontEndTechs,
            backEndTechs: APP_STORE.backEndTechs,
            buildToolsAndDepenMng: APP_STORE.buildToolsAndDepenMng
        }
    }

    render() {
        const renderTechList = (techList) => {
            return techList.map((tech, index)=>{
                return (
                    <div key={index} data-tip={tech.title} className="tech-container col s6 m4 l3">
                        <img src={tech.src} className="tech-logo" alt={tech.title} />
                        <ReactTooltip place="bottom" type="dark" effect="solid" />
                    </div>
                )
            })
        }

        return (
            <div className="skills-component row">
                <PageHeader title="Skills" />
                <ul className="collection with-header">
                    <li className="collection-header grey lighten-2"><h4 className="center"> Front End Technologies </h4></li>
                    <li className="collection-item col s12 m12 l12">
                        {renderTechList(this.state.frontEndTechs)}
                    </li>
                </ul>
                <ul className="collection with-header">
                    <li className="collection-header grey lighten-2"><h4 className="center"> Back End Technologies </h4></li>
                    <li className="collection-item col s12 m12 l12">
                        {renderTechList(this.state.backEndTechs)}
                    </li>
                </ul>
                <ul className="collection with-header">
                    <li className="collection-header grey lighten-2"><h4 className="center"> Build Tools &amp; Dependency Management </h4></li>
                    <li className="collection-item col s12 m12 l12">
                        {renderTechList(this.state.buildToolsAndDepenMng)}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Skills;