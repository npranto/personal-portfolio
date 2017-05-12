import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.component.scss';

import {APP_STORE} from './../assets/store/index.js';
import NavigationBar from './components/navigation-bar/NavigationBar.component.jsx';
import SocialsFooter from './components/socials-footer/SocialsFooter.component.jsx';
import Home from './pages/home/Home.component.jsx';
import About from './pages/about/About.component.jsx';
import Skills from './pages/skills/Skills.component.jsx';
import Projects from './pages/projects/Projects.component.jsx';
import Connect from './pages/connect/Connect.component.jsx';
import Experience from './pages/experience/Experience.component.jsx';
import Education from './pages/education/Education.component.jsx';
import Project from './components/project/Project.component.jsx';
import EmailSubmitConfirmation from './components/email-submit-confirmation/EmailSubmitConfirmation.component.jsx';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            projects: APP_STORE.projects
        }
    }
    render() {

        const  renderIndividualProjectRoutes = () => {
            return this.state.projects.map((project, index)=>{
                return (
                    <Route key={index} path={`/project@${project.projectTitle}`} component={Project} />
                )
            })
        }

        return (
            <div className="app-component">
                <section className="header col s12 m12 l12">
                    <NavigationBar />
                </section>
                <section className="pages col s12 m12 l12">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/experience" component={Experience} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/education" component={Education} />
                        <Route path="/connect" component={Connect} />
                        <Route path="/thank-you" component={EmailSubmitConfirmation} />
                        {renderIndividualProjectRoutes()}
                    </Switch>
                </section>
                <section className="footer col s12 m12 l12">
                    <SocialsFooter />
                </section>
            </div>
        )
    }
}

export default App;