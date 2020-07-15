import React from 'react';
import './index.css';
const image1 = 'https://picsum.photos/200/300';
const image2 = 'https://picsum.photos/seed/picsum/200/300';
const image3 = 'https://picsum.photos/200/300/?blur';
const picLink = 'https://www.google.com';

function ImageGallery() {
    return (
        <div className='img_div'>
            <a href={picLink} target='_shuvo'>
                <img src={image1} alt='image_one' />
            </a>
            <a href={picLink} target='_shuvo'>
                <img src={image2} alt='image_two' />
            </a>
            <a href={picLink} target='_shuvo'>
                <img src={image3} alt='image_three' />
            </a>
        </div>
    );
}

export default ImageGallery;

