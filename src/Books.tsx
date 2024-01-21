import React, { useState } from 'react'
import { bookDescriptions } from './assets/bookDescriptions'

type BooksProps = {
  imageUrls: string[]
  bookDescriptions: string[]
}

export function Books({ imageUrls }: BooksProps) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0
      return index + 1
    })
  }
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1
      return index - 1
    })
  }

  return (
    <div>
      <div className="books-wrapper">
        {imageUrls.map((url, index) => (
          <div key={index} className="book-container">
            <img src={url} alt="Book cover" />
            <p>{bookDescriptions[index]}</p>
          </div>
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
      >
        LEFT
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
      >
        RIGHT
      </button>
    </div>
  )
}

export default Books
