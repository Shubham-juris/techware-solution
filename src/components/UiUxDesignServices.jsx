import React from "react";
import uiuxImg from "../assets/services/UIUXDesignerImg.png";
import { useNavigate } from "react-router-dom";
const UiUxDesignServices = () => {
  const navigate = useNavigate();
  const handleClickbutton = () => {
    navigate("/contact");
  };
  return (
    <>
      <section className="py-7 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            UI/UX Design Services
          </h1>
          <div className="h-1  bg-red-500 mb-6"></div>
          <p className="text-gray-700 text-lg mb-6 py-9">
            At Techware Solutions, we believe that great design is more than
            just aesthetics — it’s about creating meaningful and intuitive
            experiences that delight users and drive business success. Our
            expert UI/UX design team is passionate about turning complex ideas
            into clean, user-friendly digital interfaces that work seamlessly
            across all devices.
          </p>
          <p>
            We follow a user-centered design approach to ensure that the end
            product not only looks beautiful but also solves real problems. By
            conducting in-depth user research, wireframing, prototyping, and
            usability testing, we craft digital experiences that are easy to
            navigate, engaging, and conversion-focused.
          </p>
          <p className="text-gray-700 text-lg mb-6 py-9">
            Our UI/UX designers work closely with clients to understand their
            brand, audience, and goals. Whether you need a sleek mobile app
            interface, a responsive website, or a complete redesign of your
            existing product, we ensure every detail is crafted with precision.
          </p>
          <div className="grid md:grid-cols-2 gap-80 text-left mt-8">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Our process
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700">
                <li>User research & personas</li>
                <li>Wireframes & prototyping</li>
                <li>Visual design</li>
                <li>Usability testing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Tools we use
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700">
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Sketch</li>
                <li>InVision</li>
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
              src={uiuxImg}
              alt="Web Development Illustration"
              className="w-full max-h-106 object-contain mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Our UI/UX Services Include:
            </h2>
            <div className="h-1 w-12 bg-red-500 mb-6"></div>
            <div className="py-2 px-4">
              <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
                <li>User Research & Journey Mapping</li>
                <li>Wireframing & Prototyping</li>
                <li>Responsive Web Design</li>
                <li>Mobile App UI Design</li>
                <li>Interaction Design</li>
                <li>UX Audit & Usability Testing</li>
              </ul>
            </div>
            <p className="text-gray-700 text-lg py-3">
              We leverage the latest design tools like Figma, Adobe XD, Sketch,
              and InVision to deliver modern, scalable, and pixel-perfect
              interfaces. We design with accessibility and performance in mind,
              ensuring your product is inclusive and fast.
            </p>
            <p>
              From startups to enterprise-level applications, our design team
              has successfully delivered impactful solutions across various
              industries like e-commerce, education, healthcare, and SaaS
              platforms. Let us help you create a digital product that not only
              looks stunning but also provides a smooth and delightful
              experience for your users.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default UiUxDesignServices;
