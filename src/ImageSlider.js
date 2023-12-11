import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';



function ImageSlider({ imageUrls, imageText }) {

    const [imageIndex, setImageIndex] = useState(0);
    const [inProp, setInProp] = useState(true);

    return (
        <div className='slider-container'>
            <CSSTransition
                in={inProp} // Set to true to make the initial transition happen
                timeout={500} // Adjust as needed
                classNames='fade'
                unmountOnExit
                onEnter={() => setInProp(true)}
                onExited={() => setInProp(false)}
            >
                <div className='img-container'>
                    <img src={imageUrls[imageIndex]}
                        alt={`Image ${imageIndex}`}
                        className='img-slider-img'
                        style={{
                            opacity: inProp ? 1 : 0,
                            transform: `translateX(${inProp ? 0 : '100%'})`,
                            transition: 'opacity 1s, transform 1s',
                        }}
                    />
                </div>
            </CSSTransition>
            <div className='description-container'>
                <p className='book-description'>{imageText[imageIndex]}</p>
            </div>
            <button
                className='img-slider-left-btn'
                onClick={() => setImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length)}
            >
                &#8656;
            </button>
            <button
                className='img-slider-right-btn'
                onClick={() => setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)}
            >
                &#8658;
            </button>
        </div>
    );
}

export default ImageSlider;
