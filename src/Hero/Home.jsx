import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../Hero/HeroSection";
import Services from "../services/services";
import heroImg2 from "../assets/hero/heroImg2.jpg";
import heroImg4 from "../assets/hero/heroImg4.jpg";

const Home = () => {
  const navigate = useNavigate();
  const images = [heroImg4, heroImg2];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    setAnimateText(true);
    setAnimateImage(true);
    const timeout = setTimeout(() => {
      setAnimateText(false);
      setAnimateImage(false);
    }, 700);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <>
      <div
        className={` opacity-50 relative w-full h-[90vh] bg-cover bg-center transition-all duration-1000 ease-in-out ${
          animateImage
            ? "opacity-0 scale-105 animate-fadeInImage"
            : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center px-4">
          <div className="max-w-4xl text-center text-white">
            <h1
              className={`text-3xl md:text-5xl font-bold mb-6 transform transition-all duration-700 ease-out ${
                animateText ? "opacity-0 translate-y-30 animate-fadeInUp" : ""
              }`}
            >
              Annual Maintenance Contract
            </h1>
            <button
              onClick={handleClick}
              className="bg-white text-blue-900 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition"
            >
              Read More
            </button>
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
          aria-label="Previous"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
          aria-label="Next"
        >
          &#10095;
        </button>
      </div>

      <HeroSection />
      <Services />
    </>
  );
};

export default Home;
