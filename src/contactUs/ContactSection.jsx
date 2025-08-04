import React from "react";

const ContactSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center text-red-600 mb-2">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mb-8">
        We'd love to hear from you! Please fill out the form below or contact us
        using the details.
      </p>

      <div className="flex flex-col md:flex-row md:space-x-10">
        {/* Contact Form */}
        <div className="md:w-2/3 bg-white p-6 rounded-xl shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input 
              required
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
              required
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="md:w-1/3 mt-8 md:mt-0 bg-gray-50 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Techware Solutions
          </h3>
          <p className="text-gray-600 mb-2">📞 +91 12345 67890</p>
          <p className="text-gray-600 mb-2">✉️ contact@techwaresolutions.com</p>
          <p className="text-gray-600">🏢 123 Tech Street, Bangalore, India</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
