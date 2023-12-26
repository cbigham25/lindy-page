import { useState, useRef } from 'react';


function ImageSlider({ imageUrls, imageText }) {

    const [imageIndex, setImageIndex] = useState(0);

    return (
        <>
            <div className='main-slider-container'>
                <button
                    className='img-slider-left-btn'
                    onClick={() => setImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length)}
                >
                </button>
                <div className='mobile-container'>
                    <div className='book-slider-container'>
                        <div className='img-container' style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                            {imageUrls.map((url, index) => (

                                <img
                                    key={url}
                                    src={url}
                                    className={`img-slider-img ${index === imageIndex ? 'visible' : ''}`}
                                    style={{
                                        opacity: index === imageIndex ? 1 : 0,
                                    }}
                                />
                            ))}
                        </div>
                        <div className='dot-container'>
                            {imageUrls.map((_, index) => (
                                <button key={index} className='img-slider-dot-btn' onClick={() => setImageIndex(index)}>
                                    {index === imageIndex ? String.fromCharCode(9673) : String.fromCharCode(9675)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='description-container'>

                        {imageText.map((imageText, index) => (
                            <p
                                key={index}
                                className={`book-description ${index === imageIndex ? 'visible' : ''}`}
                                style={{
                                    opacity: index === imageIndex ? 1 : 0,
                                }}
                            >
                                {imageText}
                            </p>
                        ))}
                    </div>
                </div>
                <button
                    className='img-slider-right-btn'
                    onClick={() => setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)}
                >
                </button>
            </div>


        </>
    );
}

export default ImageSlider;
