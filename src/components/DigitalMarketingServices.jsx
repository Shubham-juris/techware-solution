import React from "react";
import digitalMarketing from "../assets/services/digitalImg.png";
import { useNavigate } from "react-router-dom";

const DigitalMarketingServices = () => {
  const navigate = useNavigate();
  const handleClickbutton = () => {
    navigate("/contact");
  };

  return (
    <>
      <section className="py-7 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Digital Marketing Services
          </h1>
          <div className="h-1 bg-red-500 mb-6"></div>
          <p className="text-gray-700 text-lg mb-6 py-9">
            In today's competitive digital landscape, simply having an online
            presence is not enough — your brand needs a strong strategy to stand
            out. At Techware Solutions, we offer comprehensive digital marketing
            services that help businesses attract, engage, and convert their
            target audience effectively.
          </p>
          <p>
            Our digital marketing team blends creativity with data-driven
            strategies to deliver real, measurable results. Whether you're a
            startup trying to gain visibility or an established business aiming
            to scale, we customize our approach to suit your specific goals and
            industry.
          </p>
          <p className="text-gray-700 text-lg mb-6 py-9">
            We focus on all major aspects of digital marketing — from building
            brand awareness to driving targeted traffic and improving conversion
            rates. With the right mix of SEO, social media, content marketing,
            and paid advertising, we help you build a powerful digital presence
            that delivers long-term success.
          </p>

          <div className="grid md:grid-cols-2 gap-20 text-left mt-8">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Our services
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700">
                <li>Search Engine Optimization (SEO)</li>
                <li>Pay-per-click campaigns (Google Ads)</li>
                <li>Social media marketing</li>
                <li>Content writing & blogging</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Why choose us?
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700">
                <li>Data-driven strategies</li>
                <li>Creative content team</li>
                <li>Regular reports & analytics</li>
                <li>ROI-focused campaigns</li>
              </ul>
            </div>
          </div>

          <button
            className="mt-8 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            onClick={handleClickbutton}
          >
            Contact Us
          </button>
        </div>
      </section>

      <section className="py-6 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px]">
              <div className="absolute inset-0">
                <img
                  src={digitalMarketing}
                  alt="Inner Blur"
                  className="w-full h-full object-cover filter blur-md scale-105"
                />
                <div className="absolute inset-0 bg-white/30"></div>
              </div>
              <img
                src={digitalMarketing}
                alt="Digital Marketing Illustration"
                className="relative w-full object-contain z-10"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Our Digital Marketing Services Include:
            </h2>
            <div className="h-1 w-12 bg-red-500 mb-6"></div>
            <div className="py-2 px-4">
              <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
                <li>Search Engine Optimization</li>
                <li>Social Media Marketing</li>
                <li>Pay-Per-Click Advertising</li>
                <li>Content Marketing</li>
                <li>Email Marketing</li>
                <li>Online Reputation Management</li>
              </ul>
            </div>
            <p className="text-gray-700 text-lg py-3">
              At Techware Solutions, we don’t just bring traffic — we bring the
              right traffic. Our goal is to help you grow your brand online,
              increase your ROI, and stay ahead of the competition.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingServices;
