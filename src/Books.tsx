import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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
        <p className="preorder">Out Now!</p>
      </a>
    </div>
  </div>
)

const Book2 = ({ imageUrl }) => (
  <div className="book-container" id="book-2">
    <img src={imageUrl} alt="Book cover 2" />
    <div className="desc-container">
      <h1>"Egal has fallen!"</h1>
      <p>
        After a brutal coup, Prolivgrad rests in the grip of a merciless
        dictator, leaving dissenters to face certain death.
      </p>

      <p>
        Sharon struggles with her part in bringing chaos to the city until a
        chance rescue leads her to join a fledgling resistance.
      </p>

      <p>
        Meanwhile, newly liberated Troy must choose between aiding a tyrant or
        risking all to oppose him.
      </p>

      <p>
        Across the continent, Ren and Seffin embark on a mission to prepare for
        an epic showdown against an undead threat, guarding a child destined for
        sacrifice.
      </p>

      <p> A mystic with immense potential and little control.</p>

      <a
        href="https://www.amazon.com/dp/B0D5FGGP8V/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="preorder">Out Now!</p>
      </a>
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
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const bookIndex = parseInt(params.get('book'), 10)

  const bookComponents = [
    <Book1 imageUrl={imageUrls[0]} />,
    <Book2 imageUrl={imageUrls[1]} />,
    <Book3 imageUrl={imageUrls[2]} />,
  ]
  const [currentBook, setCurrentBook] = useState(0) // Always start with Book 1
  const totalBooks = bookComponents.length

  useEffect(() => {
    const scrollToBook = sessionStorage.getItem('scrollToBook')
    if (scrollToBook !== null) {
      const bookElement = document.getElementById(
        `book-${parseInt(scrollToBook) + 1}`
      )
      if (bookElement) {
        bookElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      sessionStorage.removeItem('scrollToBook') // Clean up after scrolling
    }
  }, [])

  useEffect(() => {
    if (bookIndex >= 0 && bookIndex < totalBooks) {
      setCurrentBook(bookIndex)
    }
  }, [bookIndex, totalBooks])

  const goToNextBook = () => {
    setCurrentBook((current) => (current + 1) % totalBooks)
  }

  const goToPreviousBook = () => {
    setCurrentBook((current) => (current - 1 + totalBooks) % totalBooks)
  }

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
