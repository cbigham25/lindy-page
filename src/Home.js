import React, { Component } from "react";
import NewsletterForm from "./NewsletterForm";

class Home extends Component {
    render() {
        return (
            <div className="content-container-home">
                <div className="home-p">
                    <p>Here is some really cool text that introduces the Author page.</p>
                </div>
                <NewsletterForm />
            </div>
        );
    }
}

export default Home;
