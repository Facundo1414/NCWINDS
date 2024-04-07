/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from '../../molecules/card/Card';
import './Carousel.css';
const Carousel = ({ images }) => {

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex(prevIndex => prevIndex + 1);
  };

  const prevSlide = () => {
    setStartIndex(prevIndex => prevIndex - 1);
  };
  
  

  return (
    <div className="carousel">
      <button className="prevBtn" onClick={prevSlide} disabled={startIndex === 0}>&#10094;</button>
      <div className="carousel-container" style={{ transform: `translateX(-${0 * 10}%)` }}>
        <div className="slide" >
          {images.slice(startIndex, startIndex +3).map((image, index) => {
          return (
            <Card {...image} key={index}/>
          )
})}
        </div>
      </div>
      <button className="nextBtn" onClick={nextSlide} disabled={startIndex + 3 >= images.length}>&#10095;</button>
      
    </div>
  );
};

export default Carousel;