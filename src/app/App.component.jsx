import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.component.css';
import NavigationBar from './components/navigation-bar/NavigationBar.component.jsx';
import Home from './pages/home/Home.component.jsx';
import About from './pages/about/About.component.jsx';

class App extends Component{
    render() {
        return (
            <div id="app-component container">
                <section className="col s12 m12 l12">
                    <NavigationBar />
                </section>
                <section>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                </section>
            </div>
        )
    }
}

export default App;
