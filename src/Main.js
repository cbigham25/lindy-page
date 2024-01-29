import React, { useState } from 'react'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import book1 from './assets/placeholder-1.jpg'
import book2 from './assets/placeholder-2.jpg'
import book3 from './assets/placeholder-3.jpg'
import About from './About'
import Home from './Home'
import Books from './Books.tsx'

const IMAGES = [book1, book2, book3]

function Main() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <Router>
      <>
        <header>
          <h1>
            <NavLink to="/">M. J. Lindemann</NavLink>
          </h1>

          {/* Navigation Menu */}
          <div className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
            <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
              <li>
                <NavLink to="/books" onClick={closeMenu}>
                  Books
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={closeMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <a href="https://mjlindemann.blogspot.com/" onClick={closeMenu}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/books" element={<Books imageUrls={IMAGES} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer>
          <div className="footer"></div>
        </footer>
      </>
    </Router>
  )
}

export default Main
