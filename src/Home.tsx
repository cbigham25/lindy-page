import React from 'react'
import { Link } from 'react-router-dom'

export function Home({ imageUrl, secondImageUrl }) {
  return (
    <>
      <div className="content-container-home">
        <div className="home-content-wrapper">
          <div className="home-p">
            <p>The Intention Series:</p>
            <p>Book 1</p>
            <a
              href="https://www.amazon.com/dp/B0CVS4M1BZ/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="preorder">Out Now!</p>
            </a>
          </div>
          <Link to="/books">
            <div className="img-wrapper">
              <img src={imageUrl} alt="3D render of book" />
            </div>
          </Link>
        </div>
        <div className="background-gradient-1"></div>
        <div className="home-content-wrapper">
          <div className="home-p">
            <p>The Intention Series:</p>
            <p>Book 2</p>
            <a
              href="https://www.amazon.com/dp/B0D5FGGP8V/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="preorder">pre-order</p>
            </a>
          </div>
          <Link to="/books">
            <div className="img-wrapper">
              <img src={secondImageUrl} alt="3D render of book 2" />
            </div>
          </Link>
        </div>
        <div className="background-gradient-2"></div>
      </div>
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
