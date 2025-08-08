import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../Hero/HeroSection";
import heroImg9 from "../assets/hero/heroImg9.jpg";
import heroImg10 from "../assets/hero/heroImg10.jpg";
import heroImg11 from "../assets/hero/heroImg11.jpg";

const Home = () => {
  const navigate = useNavigate();

  // const slides = [
  //   {
  //     image: heroImg9,
  //     heading: "Annual Maintenance Contract",
  //     buttonText: "Read More",
  //     link: "/about",
  //   },
  //   {
  //     image: heroImg10,
  //     heading: "Enterprise IT Infrastructure",
  //     buttonText: "Explore Services",
  //     link: "/services",
  //   },
  //   {
  //     image: heroImg11,
  //     heading: "Cloud Solutions & Security",
  //     buttonText: "Get Started",
  //     link: "/cloud",
  //   },
  // ];
  const slides = [
    {
      image: heroImg9,
      heading: "Modern Web Development",
      buttonText: "Learn More",
      link: "/web-development",
    },
    {
      image: heroImg10,
      heading: "Innovative Mobile App Solutions",
      buttonText: "Explore now",
      link: "/app-development",
    },
    {
      image: heroImg11,
      heading: "Custom Software Development",
      buttonText: "View ",
      link: "/software-development",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);
  const [animateOverlay, setAnimateOverlay] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    setAnimateText(true);
    setAnimateOverlay(true);
    const timeout = setTimeout(() => {
      setAnimateText(false);
      setAnimateOverlay(false);
    }, 700);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleClick = () => {
    navigate(slides[currentIndex].link);
  };

  const { image, heading, buttonText } = slides[currentIndex];

  return (
    <>
      <div
        className={`relative w-full h-[90vh] bg-cover bg-center transition-all duration-1000 ease-in-out ${
          animateOverlay ? "opacity-90 scale-105" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-20 transition-opacity duration-1000 ${
            animateOverlay ? " bg-opacity-70" : " bg-opacity-50"
          }`}
        >
          <h1
            className={`text-3xl md:text-6xl font-bold text-white transition-all duration-700 ease-out ${
              animateText ? "opacity-0 translate-y-10" : "opacity-100"
            }`}
          >
            {heading}
          </h1>
          <button
            onClick={handleClick}
            className="mt-6 bg-white text-blue-900 font-semibold py-2 px-6 rounded-full hover:bg-gray-300 transition"
          >
            {buttonText}
          </button>
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
    </>
  );
};

export default Home;
