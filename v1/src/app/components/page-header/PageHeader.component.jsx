import React, {Component} from 'react';

import './PageHeader.component.scss';

class PageHeader extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="header col s12 m12 l12 valign-wrapper white-text blue darken-2">
                <h3> {this.props.title} </h3>
                <div className="divider"></div>
            </section>
        )
    }
}

export default PageHeader;