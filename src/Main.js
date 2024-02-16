import React, { useState } from 'react'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import book1_render from './assets/Ebook_TheWilloftheWorld_3DMockup.png'
import book1 from './assets/placeholder-1.jpg'
import book2 from './assets/placeholder-2.jpg'
import book3 from './assets/placeholder-3.jpg'
import About from './About'
import Home from './Home.tsx'
import Books from './Books.tsx'
import Socials from './Social.js'

const IMAGES = [book1, book2, book3]

function Main() {
  return (
    <Router>
      <>
        <header>
          <h1>
            <NavLink to="/">M. J. Lindemann</NavLink>
          </h1>

          {/* Navigation Menu */}
          <div className={`nav-wrapper`} style={{ zIndex: 1000 }}>
            <ul className={`navbar`}>
              <li>
                <NavLink to="/books">Books</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <a href="https://mjlindemann.blogspot.com/">Blog</a>
              </li>
            </ul>
          </div>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home imageUrl={book1_render} />} />
            <Route path="/books" element={<Books imageUrls={IMAGES} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer>
          <ul className={`navbar-footer`}>
            <li>
              <NavLink to="/books">Books</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <a href="https://mjlindemann.blogspot.com/">Blog</a>
            </li>
          </ul>
          <ul className={`social-nav-footer`}>
            <Socials />
          </ul>
        </footer>
      </>
    </Router>
  )
}

export default Main
