import React, { useState, useEffect } from "react";
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import book1 from "./assets/placeholder-1.jpg"
import book2 from "./assets/placeholder-2.jpg"
import book3 from "./assets/placeholder-3.jpg"
import { bookDescriptions } from "./assets/bookDescriptions.js";
import About from "./About";
import Home from "./Home";
import Books from "./Books.tsx";

const IMAGES = [book1, book2, book3];
const DESC = [bookDescriptions[0], bookDescriptions[1], bookDescriptions[2]];


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
                            <NavLink to="/books">Books</NavLink>
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
                        <Route path="/books" element={<Books imageUrls={IMAGES} bookDescriptions={DESC}/>} />
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
