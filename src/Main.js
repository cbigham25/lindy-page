import React from "react";
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Routes
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import ImageSlider from "./ImageSlider.js";
import book1 from "./assets/placeholder-1.jpg"
import book2 from "./assets/placeholder-2.jpg"
import book3 from "./assets/placeholder-3.jpg"


const IMAGES = [book1, book2, book3]
const IMAGE_DESCRIPTIONS = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Nibh mauris cursus mattis molestie. Viverra nam libero justo laoreet sit amet cursus. Feugiat pretium nibh ipsum consequat nisl. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Tellus at urna condimentum mattis pellentesque id. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Ullamcorper sit amet risus nullam eget felis eget. Enim nec dui nunc mattis enim ut. Id neque aliquam vestibulum morbi blandit cursus risus. Egestas tellus rutrum tellus pellentesque eu. Massa ultricies mi quis hendrerit dolor magna eget. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. A scelerisque purus semper eget duis. Vestibulum mattis ullamcorper velit sed ullamcorper.",
    "Eget gravida cum sociis natoque penatibus et magnis. Id aliquet risus feugiat in ante metus dictum at. Nisi est sit amet facilisis magna etiam tempor. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus. Tortor at risus viverra adipiscing at in. Non diam phasellus vestibulum lorem sed risus. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Vestibulum morbi blandit cursus risus at ultrices mi tempus. In ante metus dictum at. Neque gravida in fermentum et sollicitudin ac orci phasellus. Morbi leo urna molestie at. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Blandit massa enim nec dui nunc. Nunc mattis enim ut tellus. Et malesuada fames ac turpis egestas maecenas. In hac habitasse platea dictumst quisque sagittis purus sit amet. Et ligula ullamcorper malesuada proin. Bibendum est ultricies integer quis auctor elit sed vulputate. Euismod elementum nisi quis eleifend."]

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
