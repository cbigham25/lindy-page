import React, { useState } from 'react'

const Book1 = ({ imageUrl }) => (
  <div className="book-container" id="book-1">
    <img src={imageUrl} alt="Book cover 1" />
    <div className="desc-container">
      {/* Book 1 Description HTML here */}
      <h1>"MAY THE WILL OF THE WORLD GUIDE YOUR PATH"</h1>
      <p>
        Plagued by the relentless husk, the populace must seek refuge behind
        barriers powered by crystal pylons provided by the Guild. But
        maintaining these safe havens comes at an extortionate price. As
        settlements are lost to greed, the tide of abominations surge,
        threatening to sweep humanity away. Four lives intersect amidst the
        storm:
      </p>

      <p> A mercenary with a penchant for thievery and a hunger for glory.</p>

      <p> An assassin on a path of vengeance for her lost life.</p>

      <p>
        A senator with machinations to save the world from inevitable collapse.
      </p>

      <p> A mystic with immense potential and little control.</p>

      <p>
        All four possess the power to save the world. Will their efforts avoid
        the coming calamity or incite catastrophe?
      </p>
      <a
        href="https://www.amazon.com/dp/B0CVS4M1BZ/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="preorder">Pre-order Now!</p>
      </a>
    </div>
  </div>
)

const Book2 = ({ imageUrl }) => (
  <div className="book-container" id="book-2">
    <img src={imageUrl} alt="Book cover 2" />
    <div className="desc-container">
      {/* Book 2 Description HTML here */}
      <p>Patience is rewarded...</p>
    </div>
  </div>
)

const Book3 = ({ imageUrl }) => (
  <div className="book-container" id="book-3">
    <img src={imageUrl} alt="Book cover 3" />
    <div className="desc-container">
      {/* Book 3 Description HTML here */}
      <p>I promise...</p>
    </div>
  </div>
)

export function Books({ imageUrls }) {
  // Array of book components
  const bookComponents = [
    <Book1 imageUrl={imageUrls[0]} />,
    <Book2 imageUrl={imageUrls[1]} />,
    <Book3 imageUrl={imageUrls[2]} />,
  ]
  const [currentBook, setCurrentBook] = useState(0)
  const totalBooks = bookComponents.length

  const goToNextBook = () => {
    setCurrentBook((current) => (current + 1) % totalBooks)
  }

  const goToPreviousBook = () => {
    setCurrentBook((current) => (current - 1 + totalBooks) % totalBooks)
  }

  // const wrapperStyle = {
  //   transform: `translateX(-${currentBook * 100}vw)`,
  //   transition: 'transform 1s ease',
  // }

  return (
    <div className="slider-container">
      <div
        className="book-wrapper"
        style={{ transform: `translateX(-${currentBook * 100}vw)` }}
      >
        {bookComponents.map((book, index) => (
          <div key={index} style={{ width: '100vw' }}>
            {book}
          </div>
        ))}
      </div>
      <button
        className="img-slider-btn left"
        onClick={goToPreviousBook}
      ></button>
      <button className="img-slider-btn right" onClick={goToNextBook}></button>
    </div>
  )
}

export default Books
