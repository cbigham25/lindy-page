import React, { useState, useEffect } from "react";
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Books from "./Books.js";




function Main() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };


    return (
        <Router>
            <>
                <header>
                    <h1><NavLink to="/">M. J. Lindemann</NavLink></h1>
                    <ul className="navbar">
                        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <NavLink to="/books/book1">Books</NavLink>
                            {showDropdown && (
                                <ul className="dropdown-menu">
                                    <li><NavLink to="/books/book1">Book 1</NavLink></li>
                                    <li><NavLink to="/books/book2">Book 2</NavLink></li>
                                    <li><NavLink to="/books/book3">Book 3</NavLink></li>
                                </ul>
                            )}
                        </li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><a href="https://mjlindemann.blogspot.com/">Blog</a></li>
                    </ul>
                </header>
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/books" element={<Books />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <footer>
                    <div className="footer"></div>
                </footer>
            </>
        </Router>
    );
}

export default Main;
