import React from "react";
import softwarwImg from "../assets/services/softwareDevelopmentImg.png";
import { useNavigate } from "react-router-dom";
const SoftwareDevelopment = () => {
  const navigate = useNavigate();
  const handleClickbutton = () => {
    navigate("/contact");
  };
  return (
    <>
      <section className="py-7 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Software Development Services
          </h1>
          <div className="h-1  bg-red-500 mb-6"></div>
          <p className="text-gray-700 text-lg mb-6 py-9">
            At Techware Solutions, we provide custom software development
            services that help businesses innovate, automate, and grow. Our goal
            is to build reliable, secure, and scalable software solutions that
            meet your unique requirements and business objectives.
          </p>
          <p>
            Software development is not just about writing code — it’s about
            solving real-world problems through technology. We take a strategic
            approach to every project, starting with deep research and planning.
            Our team collaborates closely with you to understand your goals,
            challenges, and users so we can build the right solution from the
            ground up.
          </p>
          <p className="text-gray-700 text-lg mb-6 py-9">
            We specialize in developing custom web applications, enterprise
            software, cloud-based solutions, and cross-platform tools using
            cutting-edge technologies like JavaScript, Python, .NET, Node.js,
            React, and more. Whether you need an internal tool to boost
            productivity or a customer-facing app to expand your market, we have
            the expertise to deliver high-quality results.
          </p>
          <p>
            Our software development process follows industry-standard practices
            including Agile methodology, code reviews, automated testing, and
            continuous integration to ensure your product is robust and
            future-ready
          </p>
          <div className="grid md:grid-cols-2 gap-80 text-left mt-8">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                What we build
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700">
                <li>ERP & CRM systems</li>
                <li>Inventory & billing solutions</li>
                <li>Custom dashboards</li>
                <li>API integrations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Technologies
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700">
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>React.js frontend</li>
                <li>MongoDB, PostgreSQL</li>
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
              src={softwarwImg}
              alt="Web Development Illustration"
              className="w-full max-h-106 object-contain mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Our Services Include:
            </h2>
            <div className="h-1 w-12 bg-red-500 mb-6"></div>
            <div className="py-2 px-4">
              <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
                <li>Custom Software Development</li>
                <li>Enterprise Software Solutions</li>
                <li>Web & Cloud-based Application Development</li>
                <li>Software Product Engineering</li>
                <li>Software Maintenance & Support</li>
                <li>Legacy Software Modernization</li>
              </ul>
            </div>
            <p className="text-gray-700 text-lg py-3">
              We are committed to delivering high-performance solutions that
              align with your vision, budget, and timeline. From idea validation
              to deployment and ongoing support, Techware Solutions is your
              trusted technology partner.
            </p>
            <p>
              Whether you are a startup looking to develop an MVP or an
              enterprise in need of a scalable digital system, we are here to
              help. Let’s build something powerful together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareDevelopment;
