import React from "react";
import servicesImage2 from "../assets/services/servicesImage2.jpg";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="container mx-auto px-4 py-2">
      <h2 className="text-3xl font-semibold text-blue-900 mb-2">
        Our Services
      </h2>
      <div className="h-1 w-12 bg-red-500 mb-6"></div>

      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2 mb-6 md:mb-0  ">
          <img
            src={servicesImage2}
            alt="Our Services"
            className="w-full h-full object-contain object-center rounded shadow transition-all duration-1000 ease-in-out hover:scale-105"
          />
        </div>

        <div className="md:w-1/2 text-gray-700 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Web Development
            </h3>
            <div className="h-1 w-12 bg-red-500 mb-3"></div>
            <p>
              We create fast, secure, and mobile-friendly websites for
              businesses.{" "}
              <button
                onClick={() => handleNavigate("/web-development")}
                className="text-red-500 hover:underline text-sm"
              >
                Read More
              </button>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              App Development
            </h3>
            <div className="h-1 w-12 bg-red-500 mb-3"></div>
            <p>
              Build high-performing Android & iOS apps to reach more users.{" "}
              <button
                onClick={() => handleNavigate("/app-development")}
                className="text-red-500 hover:underline text-sm"
              >
                Read More
              </button>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              UI/UX Design
            </h3>
            <div className="h-1 w-12 bg-red-500 mb-3"></div>
            <p>
              Design user-friendly and visually appealing digital interfaces.{" "}
              <button
                onClick={() => handleNavigate("/ui-ux-designer")}
                className="text-red-500 hover:underline text-sm"
              >
                Read More
              </button>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Digital Marketing
            </h3>
            <div className="h-1 w-12 bg-red-500 mb-3"></div>
            <p>
              Boost your brand with SEO, social media, and paid ads.{" "}
              <button
                onClick={() => handleNavigate("/digital-marketing")}
                className="text-red-500 hover:underline text-sm"
              >
                Read More
              </button>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Software Development
            </h3>
            <div className="h-1 w-12 bg-red-500 mb-3"></div>
            <p>
              Get custom software built for your unique business needs.{" "}
              <button
                onClick={() => handleNavigate("/software-development")}
                className="text-red-500 hover:underline text-sm"
              >
                Read More
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
