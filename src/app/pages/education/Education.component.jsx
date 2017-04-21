import React, {Component} from 'react';

import './Education.component.scss';

import devMountainLogo from './../../../assets/images/education/devmountain_logo.png';

import PageHeader from './../../components/page-header/PageHeader.component.jsx';

class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [
                'Introduction to Problem Solving W/ Java',
                'Programming W/ Data Structures (Java)',
                'Calculus I',
                'Calculus II',
                'Social Issues and Ethics in Computing',
                'Introduction to Macroeconomics',
                'Introduction to Microeconomics',
                'Nutrition for a Healthy Lifestyle',
                'Food and Society',
                'Writing about Social and Ethical Issues'
            ]
        }

        this.initializeCoursesCollapsible();
    }

    initializeCoursesCollapsible() {
        $(document).ready(function(){
            $('.collapsible').collapsible();
        });
    }

    render() {
        return (
            <div className="education-component row">
                <PageHeader title="Education" />
                <div className="education-courses col s12 m12 l12">
                    <div className="education col s12 m6 l8">

                        <div className="education-thumbnail">
                            <div className="education-img-title-subtitle-description">
                                <div className="image-container">
                                    <img src={devMountainLogo} alt="education-logo" />
                                </div>
                                <div className="title-subtitle-description">
                                    <h5 className="title flow-text"> <a href="https://devmountain.com/"> DevMountain </a> </h5>
                                    <p className="subtitle flow-text"> Web Immersive Program </p>
                                    <div className="duration-location">
                                        <p className="duration"> July - August, 2016 </p>
                                        <p className="location"> Dallas, TX </p>
                                    </div>
                                    <div className="divider"></div>
                                    <p className="description">
                                        DevMountain is a full-time immersive web development immersive program that specializes in
                                        teaching MEAN stack web framework. Its focus is heavily upon teaching modern technical skills
                                        in today's fast paced high-tech industries. The dense curriculum of DevMountain includes Git,
                                        GitHub, HTML5, CSS3, JavaScript & jQuery, AngularJS, Express, Node.JS & MongoDB
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="courses col s12 m6 l4">

                        <ul className="collapsible" data-collapsible="accordion">
                            <li>
                                <div className="collapsible-header"><i className="material-icons red-text">subject</i> <a> Courses </a> </div>
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