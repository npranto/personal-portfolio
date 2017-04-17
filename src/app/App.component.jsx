import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.component.css';
import NavigationBar from './components/navigation-bar/NavigationBar.component.jsx';
import Home from './pages/home/Home.component.jsx';
import About from './pages/about/About.component.jsx';
import Skills from './pages/skills/Skills.component.jsx';
import Projects from './pages/projects/Projects.component.jsx';
import Connect from './pages/connect/Connect.component.jsx';
import Experience from './pages/experience/Experience.component.jsx';
import Education from './pages/education/Education.component.jsx';

class App extends Component{
    render() {
        return (
            <div id="app-component container">
                <section className="col s12 m12 l12">
                    <NavigationBar />
                </section>
                <section>
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
            </div>
        )
    }
}

export default App;
