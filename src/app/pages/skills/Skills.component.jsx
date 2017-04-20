import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip'

import './Skills.component.scss';

// front end tech logos
import gitLogo from './../../../assets/images/front-end-technologies/git.svg';
import html5Logo from './../../../assets/images/front-end-technologies/html5.png';
import css3Logo from './../../../assets/images/front-end-technologies/css3.png';
import javascriptLogo from './../../../assets/images/front-end-technologies/javascript.png';
import sassLogo from './../../../assets/images/front-end-technologies/sass.png';
import bootstrapLogo from './../../../assets/images/front-end-technologies/bootstrap.png';
import materializecssLogo from './../../../assets/images/front-end-technologies/materializecss.svg';
import angular2Logo from './../../../assets/images/front-end-technologies/angular_2.png';
import reactLogo from './../../../assets/images/front-end-technologies/react.png';
import reactRouterLogo from './../../../assets/images/front-end-technologies/react_router.svg';
import reduxLogo from './../../../assets/images/front-end-technologies/redux.png';

// back end tech logos
import bcryptjsLogo from './../../../assets/images/back-end-technologies/bcryptjs.png';
import expressjsLogo from './../../../assets/images/back-end-technologies/expressjs.png';
import jsonwebtokenLogo from './../../../assets/images/back-end-technologies/jsonwebtoken.png';
import mongodbLogo from './../../../assets/images/back-end-technologies/mongodb.png';
import nodejsLogo from './../../../assets/images/back-end-technologies/nodejs.png';
import passportLogo from './../../../assets/images/back-end-technologies/passport.png';

// build tools and dependency management logos
import npmLogo from './../../../assets/images/build-tools-and-dependency-management/npm.png';
import webpack2Logo from './../../../assets/images/build-tools-and-dependency-management/webpack_2.png';
import yarnLogo from './../../../assets/images/build-tools-and-dependency-management/yarn.png';

import PageHeader from './../../components/page-header/PageHeader.component.jsx';

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            frontEndTechs: [
                {
                    title: 'Git',
                    src: gitLogo
                },
                {
                    title: 'HTML5',
                    src: html5Logo
                },
                {
                    title: 'CSS3',
                    src: css3Logo
                },
                {
                    title: 'JavaScript',
                    src: javascriptLogo
                },
                {
                    title: 'SASS',
                    src: sassLogo
                },
                {
                    title: 'Bootstrap',
                    src: bootstrapLogo
                },
                {
                    title: 'Materialize.css',
                    src: materializecssLogo
                },
                {
                    title: 'Angular 2',
                    src: angular2Logo
                },
                {
                    title: 'React',
                    src: reactLogo
                },
                {
                    title: 'React Router',
                    src: reactRouterLogo
                },
                {
                    title: 'Redux',
                    src: reduxLogo
                }
            ],
            backEndTech: [
                {
                    title: 'Bcrypt',
                    src: bcryptjsLogo
                },
                {
                    title: 'Express',
                    src: expressjsLogo
                },
                {
                    title: 'JSONWebToken',
                    src: jsonwebtokenLogo
                },
                {
                    title: 'MongoDB',
                    src: mongodbLogo
                },
                {
                    title: 'NodeJS',
                    src: nodejsLogo
                },
                {
                    title: 'Passport',
                    src: passportLogo
                }
            ],
            buildToolsAndDepenMng: [
                {
                    title: 'NPM',
                    src: npmLogo
                },
                {
                    title: 'Webpack 2',
                    src: webpack2Logo
                },
                {
                    title: 'Yarn',
                    src: yarnLogo
                }
            ]
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
                        {renderTechList(this.state.backEndTech)}
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