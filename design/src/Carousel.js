import React from 'react';
import ImageGallery from 'react-image-gallery';
import './App.css';
import img1 from './images/about.png';
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

  return <ImageGallery items={images} slideWidth={800}  fullScreen={true} showPlayButton={false} />;
}
export default CarouselExample;
