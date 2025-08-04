import React from "react";

const DigitalMarketingServices = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Digital Marketing
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Reach your audience and grow your brand with SEO, PPC, social media &
          content strategies.
        </p>
        <div className="grid md:grid-cols-2 gap-108 text-left mt-8">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">
              Our services
            </h2>
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
            <ul className="list-disc list-inside text-gray-700">
              <li>Data-driven strategies</li>
              <li>Creative content team</li>
              <li>Regular reports & analytics</li>
              <li>ROI-focused campaigns</li>
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

export default DigitalMarketingServices;
