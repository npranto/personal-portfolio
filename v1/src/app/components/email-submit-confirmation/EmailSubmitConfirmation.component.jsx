import React, {Component} from  'react';
import './EmailSubmitConfirmation.component.scss';

class EmailSubmitConfirmation extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="email-submit-confirmation-component col s12 m12 l12 valign-wrapper">
                <div className="thank-you-container col s12 m12 l12">
                    <i className="large material-icons done">done</i>
                    <h1 className="site-header__title">Thank you!</h1>

                    <div className="main-content">
                        <p className="main-content__body"> Thank you so much for reaching out to me. <br/> I will be in touch with you very soon.  </p>
                    </div>

                </div>
            </div>
        )
    }

}

export default EmailSubmitConfirmation;