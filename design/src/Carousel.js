import React from 'react';
import ImageGallery from 'react-image-gallery';
import './App.css';
import img1 from './images/pexels-maarten-van-den-heuvel-2284170.jpg';
function CarouselExample()  {
  const images = [
    {
      original: img1,
      // thumbnail: img1,
    },
    {
      original: img1,
      // thumbnail: 'https://example.com/path/to/thumbnail2.jpg',
    },
    {
      original: img1,
      // thumbnail: 'https://example.com/path/to/thumbnail3.jpg',
    },
  ];

  return  <div className="fullscreen-carousel">
  <ImageGallery
    items={images}
    showPlayButton={false}
    showThumbnails={false}
    showBullets={true}
    slideInterval={2000}
    additionalClass="fullscreen-image"
    

  />
</div>
}
export default CarouselExample;
