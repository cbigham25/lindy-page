import React, { useState } from 'react';

// TODO: Keep following this video to make the animations work: https://youtu.be/Kx8XlKRBZx8?si=MPvZd6qQwj0L22vV

type ImageSliderProps = {
    imageUrls: string[];
    imageText: string[];
};

function ImageSlider({ imageUrls, imageText }: ImageSliderProps) {
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <div>
            <div style={{ width: "100%", height: "100%" }}>
                <img src={imageUrls[imageIndex]} alt={`Image ${imageIndex}`} className='img-slider-img' />
                <p>{imageText[imageIndex]}</p>
            </div>
            <button onClick={() => setImageIndex(prevIndex => (prevIndex - 1 + imageUrls.length) % imageUrls.length)}>
                &#10235;
            </button>
            <button onClick={() => setImageIndex(prevIndex => (prevIndex + 1) % imageUrls.length)}>
                &#10236;
            </button>
        </div>
    );
}

export default ImageSlider;