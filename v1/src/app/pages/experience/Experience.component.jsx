import React, {Component} from 'react';

import './Experience.component.scss';

import PageHeader from './../../components/page-header/PageHeader.component.jsx';

import {APP_STORE} from './../../../assets/store/index.js';

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experiences: APP_STORE.experiences
        }
        console.log(this.state.experiences);
    }

    renderExperienceDescription(experienceDescriptionList) {
        return experienceDescriptionList.map((eachDesc, index)=>{
            return (
                <p key={index}>
                    {eachDesc}
                </p>
            )
        })
    }

    renderRecommenderRecommendations(eachRecommenderRecommendations){
        return eachRecommenderRecommendations.map((recommendation, index)=>{
            return (
                <p key={index}>
                    {recommendation}
                </p>
            )
        })
    }

    renderExperienceRecommenders(experienceRecommendersList){
        if(experienceRecommendersList.length > 0){
            return experienceRecommendersList.map((eachRecommender, index)=>{
                return (
                    <li className="collection-item avatar" key={index}>
                        <i className="material-icons circle red">forum</i>
                        <span className="title recommender-name"> <strong> {eachRecommender.name} </strong> </span>
                        <p className="recommender-description"> 
                            {eachRecommender.position} <br />
                            {eachRecommender.recommendationDate}
                        </p>
                        <blockquote>
                            {
                                this.renderRecommenderRecommendations(eachRecommender.recommendation)
                            }
                        </blockquote>
                    </li>
                )
            })
        }
    }

    renderExperiences() {
        return this.state.experiences.map((experience, index)=>{
            return (
                <div className="card large col s12 m6 l4 hoverable" key={index}>
                    <div className="card-image center waves-effect waves-block waves-light img-container">
                        <img className="activator resize-horizontal resize-vertical" src={experience.experienceLogo} />
                    </div>
                    <div className="card-content">
                        <i className="material-icons right activator">more_vert</i>
                        <span className="card-title grey-text text-darken-4"> {experience.experiencePosition} </span>
                        <p><a href={experience.experienceUrl}> {experience.experienceOrganization} </a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                        <span className="card-title grey-text text-darken-4"> {experience.experienceOrganization}</span>
                        <p className="duration"> {experience.experienceDuration} </p>
                        <p className="location"> {experience.experienceLocation} </p>
                        <div className="divider"></div>
                        <div className="description">
                            {
                                this.renderExperienceDescription(experience.experienceDescription)
                            }
                        </div>
                    
                        <ul className="collection">
                            {
                                this.renderExperienceRecommenders(experience.experienceRecommenders)
                            }
                        </ul>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="experience-component row">
                <PageHeader title="Experience" />
                {
                    this.renderExperiences()
                }
            </div>
        )
    }
}

export default Experience;