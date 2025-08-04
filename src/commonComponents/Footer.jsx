import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Technologies</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <FaPhone className="mr-2 text-red-600" />
              <span>+91-9533331419, 9391177774</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2 text-red-600" />
              <span>info@techwareitsolutions.com</span>
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="mr-2 text-red-600 mt-1" />
              <span>
                #12-887, Road no 3,
                <br /> Mahanadu Area, Tadepalli,
                <br /> Vijayawada - 520010.
              </span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4 text-red-600">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaGoogle />
          </div>
        </div>

        {/* Site Map */}
        <div>
          <h2 className="text-xl font-semibold mb-4"> Map location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.1561036080996!2d80.61390541482372!3d16.505258888612204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f139b1982d4b%3A0xb5e49b8a67995f38!2sTechware%20IT%20Solutions!5e0!3m2!1sen!2sin!4v1637834973840!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Techware IT Solutions Location"
          ></iframe>
        </div>
      </div>
      <div className="text-center py-4 text-sm border-t mt-4">
        Copyright © 2019 - Techware IT Solutions, All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
