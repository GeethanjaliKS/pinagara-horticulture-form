import React from 'react';
import ImageGallery from 'react-image-gallery';
import './App.css';
import img1 from './images/pexels-maarten-van-den-heuvel-2284170.jpg';
import img2 from './images/Which-fertilizers-to-choose-to-make-plants-grow-faster.jpg';
import img3 from './images/snack-factory-kerala-5-8-1024x1024.jpg';
function CarouselExample()  {
  const images = [
    {
      original: img1,
      // thumbnail: img1,
    },
    {
      original: img2,
      // thumbnail: 'https://example.com/path/to/thumbnail2.jpg',
    },
    {
      original: img3,
      // thumbnail: 'https://example.com/path/to/thumbnail3.jpg',
    },
  ];

  return  <div className="fullscreen-carousel">
  <ImageGallery
    items={images}
    showPlayButton={true}
    showThumbnails={false}
    showBullets={true}
    slideInterval={4000}
    additionalClass="fullscreen-image"
    autoPlay={true}
    

  />
</div>
}
export default CarouselExample;
