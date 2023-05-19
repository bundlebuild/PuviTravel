import * as React from 'react';
import './testimonials.css'

const Testimonials = () => {
  const slides = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Slide 4',
    'Slide 5'
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel">
      <div className="carousel__slide">
        <span>{slides[currentSlide]}</span>
      </div>
      <div className="carousel__buttons">
        <button className="carousel__button" onClick={goToPrevSlide}>
          Previous
        </button>
        <button className="carousel__button" onClick={goToNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Testimonials;