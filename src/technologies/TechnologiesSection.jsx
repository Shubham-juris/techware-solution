import React from "react";
import technologiesHeroImage from "../assets/technologices/technologiesImage2.jpg";
import { useNavigate } from "react-router-dom";
const TechnologiesSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };

  const technologies = [
    {
      title: "Cloud Computing",
      description:
        "Empower your business with scalable and flexible cloud solutions including AWS, Azure, and Google Cloud.",
      icon: "☁️",
    },
    {
      title: "Cybersecurity",
      description:
        "Protect your data with advanced security measures, including firewalls, intrusion detection, and endpoint protection.",
      icon: "🔒",
    },
    {
      title: "Networking Solutions",
      description:
        "Reliable networking products and architecture design tailored to your business needs.",
      icon: "🌐",
    },
    {
      title: "Data Analytics & BI",
      description:
        "Gain valuable insights using real-time analytics and business intelligence dashboards.",
      icon: "📊",
    },
    {
      title: "Software Development",
      description:
        "Custom software and app development services for web, mobile, and enterprise platforms.",
      icon: "💻",
    },
    {
      title: "AI & Automation",
      description:
        "Automate processes with AI, machine learning, and RPA to improve productivity.",
      icon: "🤖",
    },
  ];
  return (
    <>
      <section className="w-full">
        <div className="relative">
          <img
            src={technologiesHeroImage}
            alt="Technologies"
            className="w-full h-56 md:h-80 object-cover"
          />
        </div>

        <div className="text-center px-4 py-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 py-3">
            We deliver state-of-the-art technology solutions to enterprises in
            association with our global leading partners.
          </h2>
        </div>
      </section>
      <div className="bg-[#003580] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:w-3/4">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Take your Business to the Next Level with our Solutions
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Techware Solutions, with trust and experience has been driving
              businesses across the region with the best-in-class ICT
              Infrastructure Products and Services. We provide a variety of
              tools to help businesses of all kinds succeed on and off the web.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            Our Technologies
          </h1>
          <p className="mt-4 text-gray-600 text-md md:text-lg">
            Techware IT Solutions leverages cutting-edge technology to deliver
            powerful, secure, and scalable IT services.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {tech.title}
              </h3>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center mt-16">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 mb-6">
            We can build and integrate technology that’s right for your
            business. Let’s talk about your next project.
          </p>
          <button
            onClick={handleClick}
            className="bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-900 transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default TechnologiesSection;
