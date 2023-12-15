import React, { Component } from 'react';

class NewsletterForm extends Component {
    state = { scriptLoaded: false };

    componentDidMount() {
        if (typeof window.ml === 'function') {
            window.ml('account', '452769');
            this.setState({ scriptLoaded: true });
        } else {
            // Optionally set a retry mechanism or a listener for script load
        }
    }

    render() {
        if (!this.state.scriptLoaded) {
            return <div>Loading...</div>;
        }

        return (
            <div className="newsletter-form-container">
                <div className="ml-embedded" data-form="jCtfk4"></div>
            </div>
        );
    }
}

export default NewsletterForm;