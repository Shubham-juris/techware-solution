import React from "react";

const SoftwareDevelopment = () => {
  return (
    <>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Software Development
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Custom software solutions built for your business to streamline
            processes & boost efficiency.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                What we build
              </h2>
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
              <ul className="list-disc list-inside text-gray-700">
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>React.js frontend</li>
                <li>MongoDB, PostgreSQL</li>
              </ul>
            </div>
          </div>
          <button className="mt-8 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
};

export default SoftwareDevelopment;
