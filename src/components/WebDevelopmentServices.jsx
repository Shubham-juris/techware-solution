import React from "react";

const WebDevelopmentServices = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Web Development
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          We craft responsive, SEO-friendly websites tailored to your business
          needs using the latest technologies like React.js, Next.js, and more.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">
              Why choose us?
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Custom website design & development</li>
              <li>Responsive and mobile-first approach</li>
              <li>Fast-loading, SEO optimized sites</li>
              <li>Integration with CMS & APIs</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">
              Our expertise
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>React.js, Next.js, Node.js</li>
              <li>WordPress & Headless CMS</li>
              <li>eCommerce solutions</li>
              <li>Maintenance & support</li>
            </ul>
          </div>
        </div>
        <button className="mt-8 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default WebDevelopmentServices;
