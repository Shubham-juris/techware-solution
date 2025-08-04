import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import Heroimage2 from "../assets/hero/heroimage2.jpg";
const HeroSection = () => {
  return (
    <section className="relative bg-white py-12 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-900">
          Welcome To Techware IT Solutions
          <br />
          IT Infrastructure Management Services
        </h1>
        <p className="text-gray-700">
          Founded by a team of IT professionals having around 5 decades of
          collective experience, Techware IT Solutions was founded with a sole
          objective of translating organization’s business needs into effective
          information systems. Techware also realizes that the best way to
          achieve this is by being vendor neutral.
        </p>
        <p className="text-gray-700">
          Over the years Techware has been able to develop strong systems and
          processes to take care of it’s all the three stake holders –
          Customers, Partners & Employees. Customers have been given the best of
          our attention with a Motto to achieve “100% Customer 100% Happy”. We
          have created a strong service delivery methodology backed by quality
          governance and feedback system so as to be....
        </p>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center">
        <img
          src={Heroimage2}
          alt="Business team"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
