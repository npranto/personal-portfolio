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
                <a href="https://github.com/npranto">
                    <div className="chip github hvr-grow">
                        <img src={githubLogo} alt="GitHub" />
                        GitHub
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/npranto/">
                    <div className="chip linkedin hvr-grow">
                        <img src={linkedinLogo} alt="NPM" />
                        LinkedIn
                    </div>
                </a>
                <a href="https://www.npmjs.com/~npranto">
                    <div className="chip npm hvr-grow">
                        <img src={npmLogo} alt="NPM" />
                        NPM
                    </div>
                </a>
            </div>
        )
    }
}

export default SocialsFooter;