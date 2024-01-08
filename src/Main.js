import React, { useState, useEffect } from "react";
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Routes,
    useNavigate, 
    useLocation
    
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Book1 from "./Book1.js";
import Book2 from "./Book2.js";
import Book3 from "./Book3.js";


function BookNavigator() {
    const navigate = useNavigate();
    const location = useLocation();
    const books = ["/books/book1", "/books/book2", "/books/book3"];
    const [currentBookIndex, setCurrentBookIndex] = useState(0);

    const isBookRoute = books.includes(location.pathname);

    useEffect(() => {
        const currentPath = location.pathname;
        const bookIndex = books.findIndex(path => path === currentPath);
        if (bookIndex !== -1) {
            setCurrentBookIndex(bookIndex);
        }
    }, [location, books]);

    const navigateToBook = (direction) => {
        let newBookIndex = currentBookIndex + direction;
        if (newBookIndex < 0) newBookIndex = books.length - 1;
        if (newBookIndex >= books.length) newBookIndex = 0;

        navigate(books[newBookIndex]);
    };

    return isBookRoute ?(
        <div>
            <button className='img-slider-left-btn' onClick={() => navigateToBook(-1)}></button>
            <button className='img-slider-right-btn' onClick={() => navigateToBook(1)}></button>
        </div>
    ) : null;
}

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
                    <BookNavigator />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/books/book1" element={<Book1 />} />
                        <Route path="/books/book2" element={<Book2 />} />
                        <Route path="/books/book3" element={<Book3 />} />
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
