import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div className="container-home">
                <div className="p-container">
                    <p>Here is some really cool text that introduces the Author page.</p>
                </div>
                <div className="newsletter-container">
                    <div className="newsletter">
                        <h2>Newsletter</h2>
                        <form>
                            <label htmlFor="email">Email address:</label>
                            <input type="email" id="email" name="email" required />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;