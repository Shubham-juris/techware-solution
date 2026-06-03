import React from "react";
import Appimg from "../assets/services/appDevelopmentImg.png";
import { useNavigate } from "react-router-dom";

const AppDevelopmentServices = () => {
  const navigate = useNavigate();
  const handleClickbutton = () => navigate("/contact");

  return (
    <>
      {/* Top Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            App Development Services
          </h1>
          <div className="h-1 bg-red-500 mx-auto mb-6 w-16"></div>

          <p className="text-gray-700 text-lg mb-6">
            At <span className="font-semibold">Techware Solution</span>, we
            specialize in building high-quality, performance-driven mobile
            applications tailored to your business needs. Whether you’re a
            startup or an established company, our expert team can turn your
            vision into reality.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            We develop both Android and iOS apps using native technologies like
            <span className="font-medium"> Kotlin, Java, Swift </span> as well
            as modern cross-platform frameworks like{" "}
            <span className="font-medium">React Native</span> and{" "}
            <span className="font-medium">Flutter</span>. This ensures faster
            development cycles, reduced costs, and consistent user experiences
            across all platforms.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            Our approach begins with understanding your audience and business
            goals. From planning and wireframing to coding, testing, and
            deployment—we build apps that are scalable, secure, and
            performance-optimized.
          </p>

          {/* Offerings and Technologies */}
          <div className="grid md:grid-cols-2 gap-12 text-left mt-10">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                What We Offer
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-4"></div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Cross-platform app development</li>
                <li>Intuitive UI & UX</li>
                <li>API integration & backend</li>
                <li>App testing & deployment</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Technologies
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-4"></div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>React Native</li>
                <li>Flutter</li>
                <li>Kotlin & Swift</li>
                <li>Firebase & AWS</li>
              </ul>
            </div>
          </div>

          {/* Contact Button */}
          <button
            onClick={handleClickbutton}
            className="mt-10 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Image + Details Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image with Blur Effect */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[500px]">
              <div className="absolute inset-0">
                <img
                  src={Appimg}
                  alt="Blurred Background"
                  className="w-full h-full object-cover filter blur-md scale-105"
                />
                <div className="absolute inset-0 bg-white/30"></div>
              </div>
              <img
                src={Appimg}
                alt="App Development"
                className="relative w-full object-contain z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              We don’t just develop apps — we build digital products that solve
              real-world problems and drive growth.
            </h2>
            <div className="h-1 w-12 bg-red-500 mb-6"></div>

            <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 mb-6">
              <li>Custom Mobile App Development</li>
              <li>UI/UX Design for Mobile Apps</li>
              <li>App Store & Play Store Deployment</li>
              <li>Third-party API Integrations</li>
              <li>Backend Development & Cloud Integration</li>
              <li>Android & iOS Native App Development</li>
            </ul>

            <p className="text-gray-700 text-lg mb-4">
              From idea validation to post-launch support,{" "}
              <span className="font-semibold">Techware Solution</span> is your
              trusted partner. We’ve delivered apps across industries like
              e-commerce, healthcare, education, and logistics.
            </p>
            <p className="text-gray-700 text-lg">
              Let us help you build an app that meets today’s needs and is ready
              for tomorrow’s challenges — with innovation, strategy, and
              technology at the core.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDevelopmentServices;
