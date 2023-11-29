import React, { Component } from "react";
import NewsletterForm from "./NewsletterForm";

class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <p>Here is some really cool text that introduces the Author page.</p>
                </div>
                <NewsletterForm />
            </>
        );
    }
}

export default Home;
