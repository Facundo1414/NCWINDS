/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Card from '../../molecules/card/Card';
import './Carousel.css';
const Carousel = ({ images }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [numberSlides, setNumberSlides] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex(prevIndex => prevIndex + 1);
  };

  const prevSlide = () => {
    setStartIndex(prevIndex => prevIndex - 1);
  };
  
  useEffect(()=>{
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])  

  useEffect(() => {
  if(windowWidth<1000){
    setNumberSlides(1);
  }else if (windowWidth>1000 && windowWidth<1500) {
    setNumberSlides(2);
  } else {
    setNumberSlides(3);
  }
  }, [windowWidth]);
  return (
    <div className="carousel">
      <button className="prevBtn" onClick={prevSlide} disabled={startIndex === 0}>&#10094;</button>
      <div className="carousel-container" style={{ transform: `translateX(-${0 * 10}%)` }}>
        <div className="slide" >
          {images.slice(startIndex, startIndex + numberSlides).map((image, index) => {
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