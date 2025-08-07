import React from "react";
import Heroimage2 from "../assets/hero/heroimage2.jpg";
import servicesImage2 from "../assets/services/servicesImage2.jpg";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="container gap-x-16 mx-auto px-4 py-6 mt-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 space-y-6 max-w-lg mx-auto md:mx-0 px-2">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
            Welcome To Techware Solutions
            <br />
            IT Infrastructure Management Services
          </h1>
          <div className="h-1 w-12 bg-red-500 mb-6"></div>
          <p className="text-gray-700 px-2">
            Founded by a team of IT professionals having around 5 decades of
            collective experience, Techware IT Solutions was founded with a sole
            objective of translating organization’s business needs into
            effective information systems. Techware also realizes that the best
            way to achieve this is by being vendor neutral.
          </p>
          <p className="text-gray-700 px-2">
            Over the years Techware has been able to develop strong systems and
            processes to take care of its all three stakeholders – Customers,
            Partners & Employees. Customers have been given the best of our
            attention with a Motto to achieve “100% Customer 100% Happy”. We
            have created a strong service delivery methodology backed by quality
            governance and feedback system so as to be....
          </p>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 relative flex justify-center">
          <img
            src={Heroimage2}
            alt="Business team"
            className="
             w-full
                h-48
                sm:h-64
                md:h-80
                lg:h-96
                xl:h-[32rem]
                2xl:h-[40rem]
                object-cover
                object-center
                rounded
                shadow
                transition-all
                duration-1000
                ease-in-out
                hover:scale-105
            "
            style={{ minWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 py-2 ">
        <h2 className="text-3xl font-semibold text-blue-900 mb-2">
          Our Services
        </h2>
        <div className="h-1 w-12 bg-red-500 mb-6"></div>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={servicesImage2}
              alt="Our Services"
              className="
                w-full
                h-48
                sm:h-64
                md:h-80
                lg:h-96
                xl:h-[32rem]
                2xl:h-[40rem]
                object-cover
                object-center
                rounded
                shadow
                transition-all
                duration-1000
                ease-in-out
                hover:scale-105
              "
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>

          <div className="md:w-1/2 text-gray-700 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Web Development
              </h3>
              <div className="h-1 w-12 bg-red-500 mb-3"></div>
              <p>
                We create fast, secure, and mobile-friendly websites for
                businesses.{" "}
                <button
                  onClick={() => handleNavigate("/web-development")}
                  className="text-red-500 hover:underline text-sm"
                >
                  Read More
                </button>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                App Development
              </h3>
              <div className="h-1 w-12 bg-red-500 mb-3"></div>
              <p>
                Build high-performing Android & iOS apps to reach more users.{" "}
                <button
                  onClick={() => handleNavigate("/app-development")}
                  className="text-red-500 hover:underline text-sm"
                >
                  Read More
                </button>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                UI/UX Design
              </h3>
              <div className="h-1 w-12 bg-red-500 mb-3"></div>
              <p>
                Design user-friendly and visually appealing digital interfaces.{" "}
                <button
                  onClick={() => handleNavigate("/ui-ux-designer")}
                  className="text-red-500 hover:underline text-sm"
                >
                  Read More
                </button>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Digital Marketing
              </h3>
              <div className="h-1 w-12 bg-red-500 mb-3"></div>
              <p>
                Boost your brand with SEO, social media, and paid ads.{" "}
                <button
                  onClick={() => handleNavigate("/digital-marketing")}
                  className="text-red-500 hover:underline text-sm"
                >
                  Read More
                </button>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Software Development
              </h3>
              <div className="h-1 w-12 bg-red-500 mb-3"></div>
              <p>
                Get custom software built for your unique business needs.{" "}
                <button
                  onClick={() => handleNavigate("/software-development")}
                  className="text-red-500 hover:underline text-sm"
                >
                  Read More
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
