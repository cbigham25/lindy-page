import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

type ImageSliderProps = {
    imageUrls: string[];
    imageText: string[];
};

function ImageSlider({ imageUrls, imageText }: ImageSliderProps) {
    const [inProp, setInProp] = useState(false);
    const nodeRef = useRef(null);
    const [imageIndex, setImageIndex] = useState(0);
    const [isLeftBtnHovered, setIsLeftBtnHovered] = useState(false);
    const [isRightBtnHovered, setIsRightBtnHovered] = useState(false);

    const handleLeftBtnMouseEnter = () => {
        setIsLeftBtnHovered(true);
    };

    const handleLeftBtnMouseLeave = () => {
        setIsLeftBtnHovered(false);
    };

    const handleRightBtnMouseEnter = () => {
        setIsRightBtnHovered(true);
    };

    const handleRightBtnMouseLeave = () => {
        setIsRightBtnHovered(false);
    };

    const leftBtnStyle = {

        transition: 'background-image 1s ease',
    };

    const rightBtnStyle = {
        backgroundImage: isRightBtnHovered
            ? 'linear-gradient(to right,  #2B2C28 30%, #fff 70%)'
            : 'linear-gradient(to right,  #2B2C28 30%, red 70%)',
        display: 'block',
        position: 'absolute',
        top: '0',
        bottom: '0',
        cursor: 'pointer',
        width: '10%',
        textAlign: 'center',
        fontSize: '5em',
        color: '#2B2C28',
        right: '0',
    };


    return (
        <div className='slider-container'>
            <CSSTransition nodeRef={nodeRef} in={inProp} timeout={200} className='img-container'>
                <img src={imageUrls[imageIndex]} alt={`Image ${imageIndex}`} className='img-slider-img' />
            </CSSTransition>
            <div className='description-container'>
                <p className='book-description'>{imageText[imageIndex]}</p>
            </div>
            <CSSTransition
                in={isLeftBtnHovered}
                timeout={300}
                classNames='left-btn-transition'
                unmountOnExit
            >
                <button
                    className='img-slider-left-btn'
                    onMouseEnter={handleLeftBtnMouseEnter}
                    onMouseLeave={handleLeftBtnMouseLeave}
                    onClick={() => setImageIndex(prevIndex => (prevIndex - 1 + imageUrls.length) % imageUrls.length)}
                >
                    &#8656;
                </button>
            </CSSTransition>
            <CSSTransition
                in={isRightBtnHovered}
                timeout={300}
                classNames='btn-transition'
                unmountOnExit
            >
                <button
                    className='img-slider-btn'
                    onMouseEnter={handleRightBtnMouseEnter}
                    onMouseLeave={handleRightBtnMouseLeave}
                    style={{
                        ...rightBtnStyle,
                    }}
                    onClick={() => setImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length)}
                >
                    &#8658;
                </button>
            </CSSTransition>
        </div>
    );
}

export default ImageSlider;
