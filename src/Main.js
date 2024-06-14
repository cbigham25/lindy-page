import React, { useState } from 'react'
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import book1_render from './assets/Ebook_TheWilloftheWorld_3DMockup.png'
import book2_render from './assets/book-2-render.png'
import book1 from './assets/placeholder-1.jpg'
import book2 from './assets/placeholder-2.jpg'
import book3 from './assets/placeholder-3.jpg'
import About from './About'
import Home from './Home.tsx'
import Books from './Books.tsx'
import Socials from './Social.js'
import PrivacyPolicy from './policy.js'
import Subscribe from './Subscribe.js'

const IMAGES = [book1, book2, book3]

function Main() {
  return (
    <Router>
      <>
        <header>
          <h1>
            <NavLink className={'link'} to="/">
              M. J. Lindemann
            </NavLink>
          </h1>

          {/* Navigation Menu */}
          <div className={`nav-wrapper`} style={{ zIndex: 1000 }}>
            <ul className={`navbar`}>
              <li>
                <NavLink className={'link'} to="/books">
                  Books
                </NavLink>
              </li>
              <li>
                <a
                  href="https://dashboard.mailerlite.com/forms/452769/107643299860317814/share"
                  target="_blank"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <NavLink className={'link'} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <a href="https://mjlindemann.blogspot.com/" target="_blank">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </header>
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home imageUrl={book1_render} secondImageUrl={book2_render} />
              }
            />
            <Route path="/books" element={<Books imageUrls={IMAGES} />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <footer>
          <ul className={`navbar-footer`}>
            <li>
              <NavLink className={'link'} to="/books">
                Books
              </NavLink>
            </li>
            <li>
              <a
                href="https://dashboard.mailerlite.com/forms/452769/107643299860317814/share"
                target="_blank"
              >
                Newsletter
              </a>
            </li>
            <li>
              <NavLink className={'link'} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <a
                className={'link'}
                href="https://mjlindemann.blogspot.com/"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
          <ul className={`social-nav-footer`}>
            <NavLink className={'link policy'} to="/privacy-policy">
              Privacy Policy
            </NavLink>
            <Socials />
          </ul>
        </footer>
      </>
    </Router>
  )
}

export default Main
