import React, {Component} from 'react';

import './Connect.component.scss';
import {sendEmailViaEmailJS} from './../../../configs/emailJS.config.js';
import PageHeader from './../../components/page-header/PageHeader.component.jsx';

class Connect extends Component {
    constructor(props) {
        super(props)

        this.state = {
            connectForm: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    }

    updateFormValue(e, propKey) {
        let form = this.state.connectForm;
        form[e.target.name] = e.target.value;
        this.setState({
            connectForm: form
        })
        console.log(this.state.connectForm);
    }

    sendEmail() {
        console.log('About to send email...');
        sendEmailViaEmailJS();
        console.log('Email sent...');
    }
    render() {
        return (

            <div className="connect-component row">
                <PageHeader title="Connect" />

                <div className="connect-form center">

                        <form className="col s12 m6 l6 offset-m3 offset-l3">
                            <h4 className="connect-header"> Let's stay in touch </h4>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input
                                        id="icon_prefix"
                                        type="text"
                                        name="name"
                                        className="validate"
                                        value={this.state.connectForm.name}
                                        onChange={(e) => { this.updateFormValue(e, 'NAME') }}
                                        required />
                                    <label htmlFor="icon_prefix"> Name </label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">email</i>
                                    <input
                                        id="icon_prefix"
                                        type="email"
                                        name="email"
                                        className="validate"
                                        value={this.state.connectForm.email}
                                        onChange={(e) => { this.updateFormValue(e, 'EMAIL') }}
                                        required />
                                    <label htmlFor="icon_prefix"> Email </label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">subject</i>
                                    <input
                                        id="icon_prefix"
                                        type="text"
                                        name="subject"
                                        className="validate"
                                        value={this.state.connectForm.subject}
                                        onChange={(e) => { this.updateFormValue(e, 'SUBJECT') }}
                                        required />
                                    <label htmlFor="icon_prefix"> Subject </label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">mode_edit</i>
                                    <textarea
                                        id="icon_prefix2"
                                        name="message"
                                        className="materialize-textarea"
                                        value={this.state.connectForm.message}
                                        onChange={(e) => { this.updateFormValue(e, 'MESSAGE') }}
                                        required>
                                    </textarea>
                                    <label htmlFor="icon_prefix2"> Message </label>
                                </div>
                            </div>
                            <a type="submit" className="waves-effect waves-light btn-large col s6 offset-s3 green darken-1"> Send </a>
                        </form>


                </div>
            </div>

        )
    }
}

export default Connect;