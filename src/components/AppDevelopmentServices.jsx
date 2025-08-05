import React from "react";
import Appimg from "../assets/services/appDevelopmentImg.png";
import { useNavigate } from "react-router-dom";
const AppDevelopmentServices = () => {
  const navigate = useNavigate();
  const handleClickbutton = () => {
    navigate("/contact");
  };
  return (
    <>
      <section className="py-7 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            App Development Services
          </h1>
          <div className="h-1  bg-red-500 mb-6"></div>
          <p className="text-gray-700 text-lg mb-6 py-9">
            At Techware Solutions, we specialize in building high-quality,
            performance-driven mobile applications tailored to your business
            needs. Whether you’re a startup looking to launch your first app or
            an established company aiming to expand your digital reach, our
            expert app development team can turn your vision into reality.
          </p>
          <p>
            We develop both Android and iOS apps using native technologies like
            Kotlin, Java, Swift as well as modern cross-platform frameworks like
            React Native and Flutter. This ensures faster development cycles,
            reduced costs, and consistent user experience across all platforms.
          </p>
          <p className="text-gray-700 text-lg mb-6 py-9">
            Our approach to app development begins with a deep understanding of
            your target audience and business goals. We work closely with you
            during each stage of development—from planning and wireframing to
            coding, testing, and deployment. Every app we build is
            user-friendly, scalable, secure, and performance-optimized, ensuring
            a smooth and engaging experience for your users.
          </p>
          <div className="grid md:grid-cols-2 gap-80 text-left mt-8">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                What we offer
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700">
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
              <div className="h-1 w-12 bg-red-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700">
                <li>React Native</li>
                <li>Flutter</li>
                <li>Kotlin & Swift</li>
                <li>Firebase, AWS</li>
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
          <div className="w-full md:w-1/2">
            <img
              src={Appimg}
              alt="Web Development Illustration"
              className="w-full max-h-106 object-contain mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              We don’t just develop apps we build digital products that solve
              real-world problems and drive growth.
            </h2>
            <div className="h-1 w-12 bg-red-500 mb-6"></div>
            <div className="py-2 px-4">
              <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
                <li>Custom Mobile App Development</li>
                <li>UI/UX Design for Mobile Apps</li>
                <li>App Store & Play Store Deployment</li>
                <li>Third-party API Integrations</li>
                <li>Backend Development & Cloud Integration</li>
                <li>Android and iOS Native App Development</li>
              </ul>
            </div>
            <p className="text-gray-700 text-lg py-3">
              From idea validation to post-launch support, Techware Solutions is
              your trusted partner in the digital journey. We have successfully
              delivered apps across industries such as e-commerce, healthcare,
              education, logistics, and more.
            </p>
            <p>
              Let us help you build an app that not only meets today’s needs but
              is also ready for tomorrow’s challenges. With innovation,
              strategy, and technology at the core, your app idea is in safe
              hands.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDevelopmentServices;
