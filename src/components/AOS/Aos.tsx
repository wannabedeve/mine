'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css'
const AnimatedItems = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="item bg-gray-200 p-4 text-center" data-aos="fade-up">1</div>
      <div className="item bg-gray-200 p-4 text-center" data-aos="fade-down">2</div>
      <div className="item bg-gray-200 p-4 text-center" data-aos="fade-right">3</div>
      <div className="item bg-gray-200 p-4 text-center" data-aos="fade-left">4</div>
      <div className="item bg-gray-200 p-4 text-center" data-aos="zoom-in">5</div>
      <div className="item bg-gray-200 p-4 text-center" data-aos="zoom-out">6</div>
      <div className="item bg-gray-200 p-4 text-center" data-aos="slide-up">7</div>
      <div className="item bg-gray-200 p-4 text-center" data-aos="flip-up">8</div>
      <div className="item bg-gray-200 p-4 text-center" data-aos="flip-down">9</div>
      <div className="item bg-gray-200 p-4 text-center" data-aos="flip-right">10</div>
      <div className="item bg-gray-200 p-4 text-center" data-aos="flip-left">11</div>
    </div>
  );
};

export default AnimatedItems;
