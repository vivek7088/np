import React from 'react'
import { assets } from '../assets/assets'
import  { useState, useEffect } from 'react';

const images = [
  assets.hero_img,
  assets.about_img,
  assets.logo,
];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div className='relative w-full h-[500px] overflow-hidden'>
      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Text & Button */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30'>
        <h1 className='text-3xl sm:text-5xl font-bold'>Latest Arrivals</h1>
        <button className='mt-4 px-6 py-2 bg-white text-black font-semibold rounded-md'>Shop Now</button>
      </div>

      {/* Arrows */}
      <button onClick={prevSlide} className='absolute left-4 top-1/2 transform -translate-y-1/2 gray-700 text-white p-2 rounded-full'>
        &#10094;
      </button>
      <button onClick={nextSlide} className='absolute right-4 top-1/2 transform -translate-y-1/2 gray-700 text-white p-2 rounded-full'>
        &#10095;
      </button>
    </div>
  );
};

export default Hero;
