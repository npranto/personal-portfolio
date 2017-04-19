import React, {Component} from 'react';

import './SocialsFooter.component.scss';

import githubLogo from './../../../assets/images/social-logos/github-logo.png';
import linkedinLogo from './../../../assets/images/social-logos/linkedin-logo.png';
import npmLogo from './../../../assets/images/social-logos/npm-logo.png';

class SocialsFooter extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="socials valign-wrapper col s12 m12 l12">
                <a href="https://github.com/npranto" className="mobile-up">
                    <div className="chip github hvr-grow">
                        <img src={githubLogo} alt="GitHub" />
                        GitHub
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/npranto/" className="mobile-up">
                    <div className="chip linkedin hvr-grow">
                        <img src={linkedinLogo} alt="NPM" />
                        LinkedIn
                    </div>
                </a>
                <a href="https://www.npmjs.com/~npranto" className="mobile-up">
                    <div className="chip npm hvr-grow">
                        <img src={npmLogo} alt="NPM" />
                        NPM
                    </div>
                </a>

                <a href="https://github.com/npranto" className="mobile waves-effect waves-light collection-item"> 
                    <div className="social-logo">
                        <img src={githubLogo} alt="GitHub" />
                    </div>
                    GITHUB 
                </a>
                <a href="https://www.linkedin.com/in/npranto/" className="mobile waves-effect waves-light collection-item"> 
                    <div className="social-logo">
                        <img src={linkedinLogo} alt="GitHub" />
                    </div>
                    LINKEDIN 
                </a>
                <a href="https://www.npmjs.com/~npranto" className="mobile waves-effect waves-light collection-item"> 
                    <div className="social-logo">
                        <img src={npmLogo} alt="GitHub" />
                    </div>
                    NPM 
                </a>
            </div>
        )
    }
}

export default SocialsFooter;