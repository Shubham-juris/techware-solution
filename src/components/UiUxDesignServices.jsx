import React from "react";

const UiUxDesignServices = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          UI/UX Design
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Delivering beautiful and user-friendly interfaces that engage and
          delight your users.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">
              Our process
            </h2>
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
            <ul className="list-disc list-inside text-gray-700">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Sketch</li>
              <li>InVision</li>
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

export default UiUxDesignServices;
