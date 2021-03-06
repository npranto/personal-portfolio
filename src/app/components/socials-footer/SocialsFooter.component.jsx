import React, {Component} from 'react';

import './SocialsFooter.component.scss';

import {APP_STORE} from './../../../assets/store/index.js';

class SocialsFooter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            socials: APP_STORE.socials
        }
    }
    render() {
        return (
            <div className="socials valign-wrapper col s12 m12 l12">
                {
                    this.state.socials.map((social, index)=>{
                        return (
                            <div key={index}>
                                <a href={social.redirectUrl} className="mobile-up">
                                    <div className="chip github hvr-grow">
                                        <img src={social.logo} alt={social.title} />
                                        {social.title}
                                    </div>
                                </a>

                                <a href={social.redirectUrl} className="mobile waves-effect waves-light collection-item"> 
                                    <div className="social-logo">
                                        <img src={social.logo} alt={social.title} />
                                    </div>
                                    {social.title} 
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default SocialsFooter;