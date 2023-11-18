import React from "react";
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import About from "./About";
import Books from "./Books";
import Home from "./Home";

function Main() {
    return (
        <Router>
            <div>
                <div className="header-container">
                    <h1><NavLink to="/">M. J. Lindemann</NavLink></h1>
                    <ul className="navbar">
                        <li><NavLink to="/books">Books</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><a href="https://mjlindemann.blogspot.com/">Blog</a></li>
                    </ul>
                </div>
                <div className="content">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <HomeContainer>
                                    <Home />
                                </HomeContainer>
                            }
                        />
                        <Route
                            path="/books"
                            element={
                                <BooksContainer>
                                    <Books />
                                </BooksContainer>
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <AboutContainer>
                                    <About />
                                </AboutContainer>
                            }
                        />
                    </Routes>
                </div>
                <div className="footer-container">
                    <div className="footer"></div>
                </div>
            </div>
        </Router>
    );
}

// Define container components for each route
const HomeContainer = ({ children }) => (
    <div className="content-container-home">
        {children}
    </div>
);

const BooksContainer = ({ children }) => (
    <div className="content-container-books">
        {children}
    </div>
);

const AboutContainer = ({ children }) => (
    <div className="content-container-about">
        {children}
    </div>
);

export default Main;
