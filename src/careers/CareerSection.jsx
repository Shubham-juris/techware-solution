import React, { useState } from "react";
import careerImage3 from "../assets/career/creerImage3.jpg";
const CareerSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    additionalInfo: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };
  return (
    <>
      <div className="relative">
        <div className="w-full">
          <img
            src={careerImage3}
            alt="Team working together"
            className="w-full h-80 md:h-96 object-cover"
          />
        </div>

        <div className="bg-white text-center px-4 py-8 md:py-12 max-w-6xl mx-auto">
          <p className="text-gray-800 text-base md:text-lg mb-4">
            Techware having core focus on technology consulting and integration
            services is always in need of enthusiastic and energetic engineers
            who are passionate about information technologies. Our strong
            systems and processes are ideally suited to get the best from the
            professionals those who are willing to invest their time and energy
            on knowledge and skill acquisition. We believe in growth of each
            team member which in turn helps grow clients business and fulfill
            Techware's commitment. Please Send your Resume to{" "}
            <a
              href="mailto:info@techwareitsolutions.com"
              className="text-blue-600 underline"
            >
              info@techwareitsolutions.com
            </a>
          </p>
        </div>
      </div>
      <div className=" flex items-center justify-center bg-gray-100 px-4 py-8 ">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-3xl bg-white p-6 rounded shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-6 text-blue-800">
            Apply to Job
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Your Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Your Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Qualification *</label>
              <input
                type="text"
                name="qualification"
                required
                value={formData.qualification}
                onChange={handleChange}
                placeholder="Qualification"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-1 font-medium">Additional Info *</label>
            <textarea
              name="additionalInfo"
              required
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="mt-4">
            <label className="block mb-1 font-medium">Upload Resume *</label>
            <input
              type="file"
              name="resume"
              required
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-100 file:text-blue-700"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-900 transition duration-200"
            >
              Submit Resume
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CareerSection;
