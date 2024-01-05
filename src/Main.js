import React, { useState } from "react";
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Routes,
    useNavigate, 
    useRoutes
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Book1 from "./Book1.js";
import Book2 from "./Book2.js";
import Book3 from "./Book3.js";

function BookSlider() {
    const navigate = useNavigate();
    const [bookIndex, setBookIndex] = useState(1); // Start with Book1

    const books = [
        { path: "book1", component: Book1 },
        { path: "book2", component: Book2 },
        { path: "book3", component: Book3 }
    ];

    const navigateToBook = (direction) => {
        let newBookIndex = bookIndex + direction;
        if (newBookIndex < 1) newBookIndex = books.length;
        if (newBookIndex > books.length) newBookIndex = 1;

        setBookIndex(newBookIndex);
        navigate(`/books/${books[newBookIndex - 1].path}`);
    };

    const bookRoutes = books.map((book, index) => ({
        path: book.path,
        element: index + 1 === bookIndex ? <book.component /> : null
    }));

    const routes = useRoutes(bookRoutes);

    return (
        <div>
            <button className='img-slider-left-btn' onClick={() => navigateToBook(-1)}></button>
            {routes}
            <button className='img-slider-right-btn' onClick={() => navigateToBook(1)}></button>
        </div>
    );
}

function Main() {
    return (
        <Router>
            <>
                <header>
                    <h1><NavLink to="/">M. J. Lindemann</NavLink></h1>
                    <ul className="navbar">
                        <li><NavLink to="/books/book1">Books</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><a href="https://mjlindemann.blogspot.com/">Blog</a></li>
                    </ul>
                </header>
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/books/*" element={<BookSlider />} />
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
