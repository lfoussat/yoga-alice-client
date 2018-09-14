import React from 'react'
import './Carousel.css'

const Carousel = ({ slides, currentSlide }) =>
  <div id="yoga_alice_carousel">
    <img className="mySlides ya-animate-fading" src={slides[currentSlide]} alt='carousel' />
  </div>

export default Carousel
