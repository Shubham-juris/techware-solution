import React from "react";
import careerImage3 from "../assets/career/creerImage3.jpg";
const CareerSection = () => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="w-full">
        <img
          src={careerImage3} // 🔁 यहाँ अपने actual image URL से बदलें
          alt="Team working together"
          className="w-full h-80 md:h-96 object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="bg-white text-center px-4 py-8 md:py-12 max-w-6xl mx-auto">
        <p className="text-gray-800 text-base md:text-lg mb-4">
          Techware having core focus on technology consulting and integration
          services is always in need of enthusiastic and energetic engineers who
          are passionate about information technologies. Our strong systems and
          processes are ideally suited to get the best from the professionals
          those who are willing to invest their time and energy on knowledge and
          skill acquisition. We believe in growth of each team member which in
          turn helps grow clients business and fulfill Techware's commitment.
          Please Send your Resume to{" "}
          <a
            href="mailto:info@techwareitsolutions.com"
            className="text-blue-600 underline"
          >
            info@techwareitsolutions.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default CareerSection;
