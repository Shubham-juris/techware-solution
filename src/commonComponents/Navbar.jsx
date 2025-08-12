import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white w-full sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-red-600 text-lg">Techware</span>
          <span className="italic text-blue-500 text-lg">Solutions</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Desktop Menu */}
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

                {servicesDropdown && (
                  <div className="absolute top-full mt-2 bg-white shadow-md rounded-md py-2 w-48 z-10">
                    {servicesSubmenu.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.href}
                        onClick={() => setServicesDropdown(false)}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                            isActive ? "text-red-500" : ""
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setServicesDropdown(false)}
                className={({ isActive }) =>
                  `text-gray-800 hover:text-red-500 ${
                    isActive ? "text-red-500" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}

          <NavLink
            to="/contact"
            onClick={() => setServicesDropdown(false)}
            className={({ isActive }) =>
              `bg-red-600 text-white px-4 py-1 rounded-full hover:bg-gray-700 ${
                isActive ? "!bg-red-700" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
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
                      <NavLink
                        key={sub.name}
                        to={sub.href}
                        onClick={() => {
                          setServicesDropdown(false);
                          setIsOpen(false);
                        }}
                        className={({ isActive }) =>
                          `block text-gray-800 hover:text-red-500 ${
                            isActive ? "text-red-500" : ""
                          }`
                        }
                      >
                        {sub.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => {
                  setServicesDropdown(false);
                  setIsOpen(false);
                }}
                className={({ isActive }) =>
                  `block text-gray-800 hover:text-red-500 ${
                    isActive ? "text-red-500" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            )
          )}

          <NavLink
            to="/contact"
            onClick={() => {
              setServicesDropdown(false);
              setIsOpen(false);
            }}
            className={({ isActive }) =>
              `block bg-red-600 text-white px-4 py-1 rounded-full hover:bg-gray-700 ${
                isActive ? "!bg-red-700" : ""
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
