import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import About from "./About";
import Books from "./Books";
import Home from "./Home";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/books">Books</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><a href="link to lindys BlogSpot">Blog</a></li>
                    </ul>
                    <div className="content">
                        <Route path="/" component={Home} />
                        <Route path="/books" component={Books} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;