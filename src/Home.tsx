import React from 'react'
import { Link } from 'react-router-dom'

export function Home({ imageUrl }) {
  return (
    <>
      <div className="content-container-home">
        <div className="home-p">
          <p>The Intention Series:</p>
          <p>Book 1</p>
          <a
            href="https://www.amazon.com/dp/B0CVS4M1BZ/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="preorder">Pre-order Now!</p>
          </a>
        </div>
        <Link to="/books">
          <img src={imageUrl} alt="3D render of book" />
        </Link>
      </div>
      <div className="stripe"></div>
      <div id="foglayer_01" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div id="foglayer_02" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
      <div id="foglayer_03" className="fog">
        <div className="image01"></div>
        <div className="image02"></div>
      </div>
    </>
  )
}

export default Home
