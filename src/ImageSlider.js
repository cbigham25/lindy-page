import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';


function ImageSlider({ imageUrls, imageText }) {
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
                unmountOnExit={false}  // or simply remove this line, as false is the default
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
                classNames='right-btn-transition'
                unmountOnExit={false}  // or simply remove this line
            >
                <button
                    className='img-slider-right-btn'
                    onMouseEnter={handleRightBtnMouseEnter}
                    onMouseLeave={handleRightBtnMouseLeave}
                    onClick={() => setImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length)}
                >
                    &#8658;
                </button>
            </CSSTransition>
        </div>
    );
}

export default ImageSlider;
