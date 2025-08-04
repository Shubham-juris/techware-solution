import React, { useState, useEffect } from "react";
import techwareHeroImg2 from "../assets/hero/6106991.jpg";
import techwareHeroImg3 from "../assets/hero/techwareHeroImg3.jpg";
import techwareHeroImg4 from "../assets/hero/techwareHeroImg4.jpg";
import HeroSection from "../Hero/HeroSection";
import Services from "../services/services";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const images = [techwareHeroImg3, techwareHeroImg2, techwareHeroImg4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Previous image
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Next image
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center px-4">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
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

        {/* Prev / Next buttons */}
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

      {/* Other sections */}
      <HeroSection />
      <Services />
    </>
  );
};

export default Home;
