import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './ImageSlider.css';



function ImageSlider({ imageUrls, imageText }) {

    const [imageIndex, setImageIndex] = useState(0);


    return (
        <div className='slider-container'>
            <CSSTransition
                in={true} // Set to true to make the initial transition happen
                timeout={500} // Adjust as needed
                classNames='fade'
                unmountOnExit
            >
                <div className='img-container'>
                    <img src={imageUrls[imageIndex]} alt={`Image ${imageIndex}`} className='img-slider-img' />
                </div>
            </CSSTransition>
            <div className='description-container'>
                <p className='book-description'>{imageText[imageIndex]}</p>
            </div>
            <button
                className='img-slider-left-btn'
                onClick={() => setImageIndex(prevIndex => (prevIndex - 1 + imageUrls.length) % imageUrls.length)}
            >
                &#8656;
            </button>
            <button
                className='img-slider-right-btn'
                onClick={() => setImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length)}
            >
                &#8658;
            </button>
        </div>
    );
}

export default ImageSlider;
