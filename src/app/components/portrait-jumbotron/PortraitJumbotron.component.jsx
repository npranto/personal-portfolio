import React, {Component} from 'react';

import './PortraitJumbotron.component.scss';

import {APP_STORE} from './../../../assets/store/index.js';

class PortraitJumbotron extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioAuthorName: APP_STORE.portfolioAuthorName,
            portfolioAuthorPortrait: APP_STORE.portfolioAuthorPortrait,
            typewriterPositions: APP_STORE.typewriterPositions
        }

        this.initializeTypewriter();    
    }

    initializeTypewriter() {
        // Title: JS Typewriter
        // Author: Simon Shahriveri
        // Source: http://codepen.io/hi-im-si/pen/DHoup
        var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<i class="medium material-icons typewriter-starter">label_outline</i><span className="wrap">'+this.txt+'</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }

            setTimeout(function() {
            that.tick();
            }, delta);
        };

        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };
    }

    render() {
        return (
            <div className="portrait-jumbotron-component col s12 m12 l12 valign-wrapper">
                <div className="portrait-name-position col s12 m12 l12 center">
                    <div className="portrait">
                        <img src={this.state.portfolioAuthorPortrait} alt="portrait" />
                    </div>
                    <h2 className="name pacifico"> {this.state.portfolioAuthorName} </h2>
                    <p className="position">
                        <a href="" className="typewrite" data-period="2000" data-type={JSON.stringify(this.state.typewriterPositions)}>
                            <span className="wrap"></span>
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}

export default PortraitJumbotron;