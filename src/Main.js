import React from "react";
import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom";
import About from "./About";
import Books from "./Books";
import Home from "./Home";

function Main() {
    return (
        <HashRouter>
            <div>
                <div className="header-container">
                    <h1><NavLink to="/">M. J. Lindemann</NavLink></h1>
                    <ul className="navbar">
                        <li><NavLink to="/books">Books</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><a href="link to lindys BlogSpot">Blog</a></li>
                    </ul>
                </div>
                <div className="content-container">
                    <div className="placeholder-content">
                        <div className="content">
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route path="/books" element={<Books />} />
                                <Route path="/about" element={<About />} />
                            </Routes>
                        </div>
                    </div>
                </div>
                <div className="footer-container">
                    <div className="footer"></div>
                </div>
            </div>
        </HashRouter>
    );
}

export default Main;
