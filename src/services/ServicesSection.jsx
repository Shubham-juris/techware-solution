import React from "react";
import servicesImage2 from "../assets/services/servicesImage2.jpg";

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-blue-900 mb-2">
        Our Services
      </h2>
      <div className="h-1 w-12 bg-red-500 mb-6"></div>

      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={servicesImage2}
            alt="Our Services"
            className="w-full rounded shadow"
          />
        </div>

        <div className="md:w-1/2 text-gray-700 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Web Development
            </h3>
            <div className="h-1 w-12 bg-red-500 mb-6"></div>
            <p>
              We build dynamic, responsive, and secure websites tailored to your
              business needs. From simple landing pages to complex enterprise
              solutions, our expert developers ensure quality and performance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              App Development
            </h3>
            <div className="h-1 w-12 bg-red-500 mb-6"></div>
            <p>
              Our team designs and develops mobile applications that deliver
              seamless user experiences on both Android and iOS platforms,
              helping you reach a wider audience effectively.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              UI/UX Design
            </h3>
            <div className="h-1 w-12 bg-red-500 mb-6"></div>
            <p>
              We craft intuitive and engaging user interfaces that not only look
              beautiful but also enhance usability, ensuring your customers have
              the best possible interaction with your brand.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Digital Marketing
            </h3>
            <div className="h-1 w-12 bg-red-500 mb-6"></div>
            <p>
              Boost your online presence and drive business growth through our
              comprehensive digital marketing strategies, including SEO, social
              media, content marketing, and paid campaigns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Software Development
            </h3>
            <div className="h-1 w-12 bg-red-500 mb-6"></div>
            <p>
              We develop custom software solutions tailored to meet your unique
              business requirements, ensuring scalability, reliability, and
              top-notch performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
