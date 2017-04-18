import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.component.scss';
import NavigationBar from './components/navigation-bar/NavigationBar.component.jsx';
import Home from './pages/home/Home.component.jsx';
import About from './pages/about/About.component.jsx';
import Skills from './pages/skills/Skills.component.jsx';
import Projects from './pages/projects/Projects.component.jsx';
import Connect from './pages/connect/Connect.component.jsx';
import Experience from './pages/experience/Experience.component.jsx';
import Education from './pages/education/Education.component.jsx';



class App extends Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
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
                    </Switch>
                </section>
                <section className="footer col s12 m12 l12">
                    <div className="socials valign-wrapper col s12 m12 l12">
                        <a href="https://www.google.com">
                            <div className="chip hvr-grow">
                                <img src="https://img.clipartfest.com/5f501c692bb9c6782efc7af0f4bcf349_facebook-icon-circle-vector-facebook-logo_512-512.png" alt="GitHub" />
                                GitHub
                            </div>
                        </a>
                        <a href="https://www.google.com">
                            <div className="chip hvr-grow">
                                <img src="https://img.clipartfest.com/5f501c692bb9c6782efc7af0f4bcf349_facebook-icon-circle-vector-facebook-logo_512-512.png" alt="LinkedIn" />
                                LinkedIn
                            </div>
                        </a>
                        <a href="https://www.google.com">
                            <div className="chip hvr-grow">
                                <img src="https://img.clipartfest.com/5f501c692bb9c6782efc7af0f4bcf349_facebook-icon-circle-vector-facebook-logo_512-512.png" alt="NPM" />
                                NPM
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        )
    }
}

export default App;
