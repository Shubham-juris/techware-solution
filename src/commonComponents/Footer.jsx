import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>Infrastructure Management Services</li>
            <li>Network Management Service</li>
            <li>IT Security Service</li>
            <li>Desktop/Laptop Service</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-blue-600 hover:text-red-600 hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-blue-600 hover:text-red-600 hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/technologice"
                className="text-blue-600 hover:text-red-600 hover:underline"
              >
                Technologies
              </Link>
            </li>
            <li>
              <Link
                to="/career"
                className="text-blue-600 hover:text-red-600 hover:underline"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-red-600 hover:underline"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <FaPhone className="mr-2 text-red-600" />
              <a href="tel:+14034773512" className="hover:underline">
                4034773512
              </a>
            </li>

            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-red-600 " />
              <a
                href="mailto:info@techwareitsolutions.com"
                className="text-black/90 hover:underline"
              >
                info@techwareitsolutions.com
              </a>
            </li>

            <li className="flex items-start">
              <FaMapMarkerAlt className="mr-2 text-red-600 mt-1" />
              <span>
                213, Main Street North, P.O. Box 718, Slave Lake, AB T0G 2A0
              </span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-2xl transition-transform transform hover:scale-110"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/techware_solution_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 text-2xl transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Map */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Map Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1561036080996!2d80.61390541482372!3d16.505258888612204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f139b1982d4b%3A0xb5e49b8a67995f38!2sTechware%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1637834973840!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Techware Solutions Location"
          ></iframe>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 text-sm border-t mt-4">
        Copyright © 2025 - Techware Solutions, All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
