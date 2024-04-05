/* eslint-disable react/prop-types */

import { useState } from 'react';
import './Carousel.css';
import Card from '../../molecules/card/Card';

const Carousel = ({ images }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevSlide = () => { 
    setCurrentIndex(currentIndex === 0 ? images.length - 4 : currentIndex - 1);
  };
  const goToNextSlide = () => {
    
    setCurrentIndex(currentIndex === images.length - 4 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel">
      <button className="prevBtn" onClick={goToPrevSlide}>&#10094;</button>
      <div className="carousel-container" style={{ transform: `translateX(-${currentIndex * 60}%)` }}>
        <div className="slide" >
          {images.map((image, index) => {
          return (
            <Card {...image} key={index}/>
          )
})}
        </div>
      </div>
      <button className="nextBtn" onClick={goToNextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;