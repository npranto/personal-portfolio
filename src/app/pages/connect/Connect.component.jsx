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

    updateFormInputs(e) {
        let form = this.state.connectForm;
        form[e.target.name] = e.target.value;
        this.setState({
            connectForm: form
        })
        this.isFormValid();
        console.log(this.state.connectForm, this.isFormValid());
    }

    isFormValid(){
        if (
            (this.isNameValid()) &&
            (this.isEmailValid()) &&
            (this.isSubjectValid()) &&
            (this.isMessageValid())
        ){
            return true;
        }
        return false;
    }

    isNameValid() {
        return (/^[a-zA-Z\s]*$/.test(this.state.connectForm.name)) && (this.state.connectForm.name.length > 0) && (this.state.connectForm.name.length < 100);
    }

    isEmailValid() {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(this.state.connectForm.email) && (this.state.connectForm.email.length < 100);
    }

    isSubjectValid() {
        return (this.state.connectForm.subject.length > 0) && (this.state.connectForm.subject.length <= 150);
    }

    isMessageValid() {
        return (this.state.connectForm.message.length > 0) && (this.state.connectForm.message.length <= 3000);
    }

    sendEmail(e) {
        const self = this;
        console.log('About to send email...');
        sendEmailViaEmailJS(this.state.connectForm)
            .then(function(response) {
                console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                console.log('Email sent...');
                self.setState({
                    connectForm: {
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    }
                });
                self.props.history.push('/thank-you');
            }, function(err) {
                console.log("FAILED. error=", err);
            });
    }
    render() {
        const renderSendButton = () => {
            if (this.isFormValid()){
                return (
                    <a type="submit" onClick={(e) => {this.sendEmail(e)}} className="waves-effect waves-light btn-large col s6 offset-s3 green darken-1"> Send </a>
                )
            }else{
                return (
                    <a type="submit" className="waves-effect waves-light btn-large col s6 offset-s3 green darken-1 disabled"> Send </a>
                )
            }
        }


        return (

            <div className="connect-component row">
                <PageHeader title="Connect" />

                <div className="connect-form center">

                        <form className="col s12 m6 l6 offset-m3 offset-l3" onSubmit={(e) => {this.sendEmail(e)}}>
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
                                        onChange={(e) => { this.updateFormInputs(e) }}
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
                                        onChange={(e) => { this.updateFormInputs(e) }}
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
                                        onChange={(e) => { this.updateFormInputs(e) }}
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
                                        onChange={(e) => { this.updateFormInputs(e) }}
                                        required>
                                    </textarea>
                                    <label htmlFor="icon_prefix2"> Message </label>
                                </div>
                            </div>
                            {renderSendButton()}
                        </form>

                </div>
            </div>

        )
    }
}

export default Connect;