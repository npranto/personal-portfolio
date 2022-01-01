import React, {Component} from 'react';

import './Education.component.scss';

import PageHeader from './../../components/page-header/PageHeader.component.jsx';
import {APP_STORE} from './../../../assets/store/index.js'

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            institutions: APP_STORE.institutions,
            courses: APP_STORE.courses
        }

        this.initializeCoursesCollapsible();
    }

    initializeCoursesCollapsible() {
        $(document).ready(function(){
            $('.collapsible').collapsible();
            setTimeout(()=>{
                $('.collapsible').collapsible('open', 0);
            }, 250)
        });
    }

    render() {

        const renderEducation = () => {
            return this.state.institutions.map((institution, index)=>{
                return (
                    <div className="education-thumbnail" key={index}>
                        <div className="education-img-title-subtitle-description">
                            <div className="image-container">
                                <img src={institution.institutionLogo} alt="education-logo" />
                            </div>
                            <div className="title-subtitle-description">
                                <h5 className="title flow-text"> <a href={institution.institutionInfoUrl}> {institution.institutionName} </a> </h5>
                                <p className="subtitle flow-text"> {institution.institutionSubtitle} </p>
                                <div className="duration-location">
                                    <p className="duration"> {institution.institutionDuration} </p>
                                    <p className="location"> {institution.institutionLocation} </p>
                                </div>
                                <div className="divider"></div>
                                <p className="description">
                                    {institution.institutionDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return (
            <div className="education-component row">
                <PageHeader title="Education" />
                <div className="education-courses col s12 m12 l12">
                    <div className="education col s12 m8 l8">
                        {renderEducation()}
                    </div>
                    <div className="courses col s12 m4 l4">
                        <ul className="collapsible" data-collapsible="accordion">
                            <li className="collapsible-content">
                                <div className="collapsible-header blue-grey white-text"><i className="material-icons">subject</i> <strong> Courses </strong> </div>
                                <div className="collapsible-body">
                                    <ul className="collection">
                                        {
                                            this.state.courses.map((course, index)=>{
                                                return (
                                                    <li key={index} className="collection-item"> {course} </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;