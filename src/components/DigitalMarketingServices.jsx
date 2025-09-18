import React from "react";
import digitalMarketing from "../assets/services/digitalImg.png";
import { useNavigate } from "react-router-dom";

const DigitalMarketingServices = () => {
  const navigate = useNavigate();
  const handleClickbutton = () => navigate("/contact");

  return (
    <>
      {/* Top Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Digital Marketing Services
          </h1>
          <div className="h-1 bg-red-500 mx-auto mb-6 w-16"></div>

          <p className="text-gray-700 text-lg mb-6">
            In today’s competitive digital landscape, simply having an online
            presence is not enough — your brand needs a strong strategy to stand
            out. At <span className="font-semibold">Techware Solutions</span>,
            we provide comprehensive digital marketing services that help
            businesses attract, engage, and convert their audience effectively.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            Our team blends creativity with data-driven strategies to deliver
            measurable results. Whether you’re a startup gaining visibility or
            an established business scaling further, we customize our approach
            to suit your goals and industry.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            We focus on every major aspect of digital marketing — from brand
            awareness to traffic generation and improving conversion rates. With
            the right mix of{" "}
            <span className="font-medium">
              SEO, social media, content marketing, and paid advertising
            </span>
            , we help you build a powerful digital presence.
          </p>

          {/* Services & Why Choose Us */}
          <div className="grid md:grid-cols-2 gap-12 text-left mt-10">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Our Services
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-4"></div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Search Engine Optimization (SEO)</li>
                <li>Pay-per-click campaigns (Google Ads)</li>
                <li>Social Media Marketing</li>
                <li>Content Writing & Blogging</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Why Choose Us?
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-4"></div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Data-driven strategies</li>
                <li>Creative content team</li>
                <li>Regular reports & analytics</li>
                <li>ROI-focused campaigns</li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClickbutton}
            className="mt-10 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Image + Detailed Services */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image with Blur Effect */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px]">
              <div className="absolute inset-0">
                <img
                  src={digitalMarketing}
                  alt="Blurred Background"
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

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Our Digital Marketing Services Include:
            </h2>
            <div className="h-1 w-12 bg-red-500 mb-6"></div>

            <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 mb-6">
              <li>Search Engine Optimization (SEO)</li>
              <li>Social Media Marketing</li>
              <li>Pay-Per-Click Advertising</li>
              <li>Content Marketing</li>
              <li>Email Marketing</li>
              <li>Online Reputation Management</li>
            </ul>

            <p className="text-gray-700 text-lg">
              At <span className="font-semibold">Techware Solutions</span>, we
              don’t just bring traffic — we bring the{" "}
              <span className="italic">right traffic</span>. Our goal is to grow
              your brand, improve ROI, and keep you ahead of the competition.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketingServices;
