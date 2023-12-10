import React, { useState } from 'react';

// TODO: Keep following this video to make the animations work: https://youtu.be/Kx8XlKRBZx8?si=MPvZd6qQwj0L22vV

type ImageSliderProps = {
    imageUrls: string[];
    imageText: string[];
};

function ImageSlider({ imageUrls, imageText }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <div className='slider-container'>
            <div className='img-container'>
                <img src={imageUrls[imageIndex]} alt={`Image ${imageIndex}`} className='img-slider-img' />
            </div>
            <div className='description-container'>
                <p className='book-description'>{imageText[imageIndex]}</p>
            </div>

            <button className='img-slider-btn' style={{ left: 0 }} onClick={() => setImageIndex(prevIndex => (prevIndex - 1 + imageUrls.length) % imageUrls.length)}>
                &#10235;
            </button>
            <button className='img-slider-btn' style={{ right: 0 }} onClick={() => setImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length)}>
                &#10236;
            </button>
        </div>
    );
}

export default ImageSlider;