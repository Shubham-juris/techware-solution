import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/career" },
    { name: "Technologies", href: "/technologice" },
  ];

  const servicesSubmenu = [
    { name: "Web Development", href: "/web-development" },
    { name: "App Development", href: "/app-development" },
    { name: "UI/UX Designer", href: "/ui-ux-designer" },
    { name: "Software Development", href: "/software-development" },
    { name: "Digital Marketing", href: "/digital-marketing" },
  ];

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-red-600 text-lg">Techware</span>
          <span className="italic text-blue-500 text-lg">Solutions</span>
        </div>

        {/* Menu toggle button for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menu items (desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) =>
            item.name === "Services" ? (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="flex items-center text-gray-800 hover:text-red-500"
                >
                  {item.name}
                  <ChevronDown size={16} className="ml-1" />
                </button>

                {/* Dropdown */}
                {servicesDropdown && (
                  <div className="absolute top-full mt-2 bg-white shadow-md rounded-md py-2 w-48 z-10">
                    {servicesSubmenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        onClick={() => setServicesDropdown(false)}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setServicesDropdown(false)}
                className="text-gray-800 hover:text-red-500"
              >
                {item.name}
              </Link>
            )
          )}

          {/* Contact Us button */}
          <Link
            to="/contact"
            onClick={() => setServicesDropdown(false)}
            className="bg-red-600 text-white px-4 py-1 rounded-full hover:bg-gray-700"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile menu (optional, simple version) */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {menuItems.map((item) =>
            item.name === "Services" ? (
              <div key={item.name} className="space-y-1">
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="flex items-center text-gray-800 hover:text-red-500 w-full"
                >
                  {item.name}
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {servicesDropdown && (
                  <div className="pl-4 space-y-1">
                    {servicesSubmenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        onClick={() => {
                          setServicesDropdown(false);
                          setIsOpen(false);
                        }}
                        className="block text-gray-800 hover:text-red-500"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => {
                  setServicesDropdown(false);
                  setIsOpen(false);
                }}
                className="block text-gray-800 hover:text-red-500"
              >
                {item.name}
              </Link>
            )
          )}

          <Link
            to="/contact"
            onClick={() => {
              setServicesDropdown(false);
              setIsOpen(false);
            }}
            className="block bg-red-600 text-white px-4 py-1 rounded-full hover:bg-gray-700"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
