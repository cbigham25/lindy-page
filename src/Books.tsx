import React, { useState } from 'react'

export function Books({ imageUrls, bookDescriptions }) {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)
  }

  function showPrevImage() {
    setImageIndex((prevIndex) => {
      if (prevIndex === 0) return imageUrls.length - 1
      return prevIndex - 1
    })
  }

  return (
    <div className="slider-container">
      <div
        className="book-wrapper"
        style={{
          '--image-index': imageIndex,
        }}
      >
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className={`book-container ${index === imageIndex ? 'active' : ''}`}
          >
            <img src={url} alt="Book cover" />
            <p>{bookDescriptions[index]}</p>
          </div>
        ))}
      </div>
      <button onClick={showPrevImage} className="img-slider-btn left">
        LEFT
      </button>
      <button onClick={showNextImage} className="img-slider-btn right">
        RIGHT
      </button>
    </div>
  )
}

export default Books
