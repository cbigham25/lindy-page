import { useState, useRef } from 'react';


function ImageSlider({ imageUrls, imageText }) {

    const [imageIndex, setImageIndex] = useState(0);

    return (
        <>
            <div className='slider-container'>

                <div className='img-container' style={{ width: "100%", height: "100%", display: "flex", overflow: "hidden" }}>
                    {imageUrls.map(url => (

                        <img key={url} src={url} className='img-slider-img' style={{ translate: `${-100 * imageIndex}%` }} />

                    ))}
                </div>


                <div className='description-container'>
                    <p className='book-description'>{imageText[imageIndex]}</p>
                </div>
            </div>
            <button
                className='img-slider-left-btn'
                onClick={() => setImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length)}
            >
            </button>
            <button
                className='img-slider-right-btn'
                onClick={() => setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length)}
            >
            </button>
            <div className='dot-container'>
                {imageUrls.map((_, index) => (
                    <button key={index} className='img-slider-dot-btn' onClick={() => setImageIndex(index)}>
                        {index === imageIndex ? String.fromCharCode(9673) : String.fromCharCode(9675)}
                    </button>
                ))}
            </div>
        </>
    );
}

export default ImageSlider;
