import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div className="newsletter-container">
                <h2>Newsletter</h2>
                <form>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" id="email" name="email" required />
                    <button type="submit">Submit</button>
                </form>
            </div>

        );
    }
}

export default Home;