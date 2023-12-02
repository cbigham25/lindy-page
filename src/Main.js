import React from "react";
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import ImageSlider from "./ImageSlider.tsx";
import book1 from "./assets/placeholder-1.jpg"
import book2 from "./assets/placeholder-2.jpg"
import book3 from "./assets/placeholder-3.jpg"
//test


const IMAGES = [book1, book2, book3]
const IMAGE_DESCRIPTIONS = ["Description of Book1", "Description of Book2", "Description of Book3"]

function Main() {
    return (
        <Router>
            <>
                <header>
                    <h1><NavLink to="/">M. J. Lindemann</NavLink></h1>
                    <ul className="navbar">
                        <li><NavLink to="/books">Books</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><a href="https://mjlindemann.blogspot.com/">Blog</a></li>
                    </ul>
                </header>
                <main>
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
                                    <ImageSlider imageUrls={IMAGES} imageText={IMAGE_DESCRIPTIONS} />
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
                </main>
                <footer>
                    <div className="footer"></div>
                </footer>
            </>
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
    <div className="content-container-books" >
        {children}
    </div>
);

const AboutContainer = ({ children }) => (
    <div className="content-container-about">
        {children}
    </div>
);

export default Main;
