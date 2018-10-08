import React from 'react'
import './Carousel.css'
import { api } from '../api.js'

const Carousel = ({ slides, currentSlide }) =>
  <div id="yoga_alice_carousel">
    <img className="mySlides ya-animate-fading" src={`${api}/images/${slides[currentSlide].imageUrl}`} alt={slides[currentSlide].title} />
  </div>

export default Carousel
