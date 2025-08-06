import React from "react";
import aboutImage2 from "../assets/about/aboutImage2 (2).jpg";
import { useNavigate } from "react-router-dom";
import aboutImage1 from "../assets/about/aboutImg1 - Copy.jpg";
import aboutImg2 from "../assets/about/aboutImg2.jpg";
import aboutImage3 from "../assets/about/5083649.jpg";
const AboutSection = () => {
  const navigate = useNavigate("");
  const handleClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-18">
          <div className="flex-shrink-0 w-full md:w-1/2">
            <img
              src={aboutImage2}
              alt="Techware IT Solutions Team"
              className="w-full h-90 md:h-120 rounded-lg shadow-md object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="py-2 text-3xl font-bold text-blue-800 mb-4 border-b-4 border-red-500 inline-block">
              Techware IT Solutions
            </h2>
            <p className="text-gray-700 mb-4">
              Founded by a team of IT professionals having around 5 decades of
              collective experience, Techware IT Solutions was founded with a
              sole objective of translating organization’s business needs into
              effective information systems. Techware also realizes that the
              best way to achieve this is by being vendor neutral.
            </p>
            <p className="text-gray-700 mb-4">
              Over the years Techware has been able to develop strong systems
              and processes to take care of its all the three stakeholders –
              Customers, Partners & Employees. Customers have been given the
              best of our attention with a motto to achieve 100% Customer 100%
              Happy.
            </p>
            <p className="text-gray-700 mb-4">
              Our commitment to provide best-in-class customer services has also
              ensured that partners allow us to openly work with their clients.
              This has helped us to extend our services to newer geographies in
              a cost-effective manner.
            </p>
            <p className="text-gray-700">
              Techware promotes knowledge culture where-in employees are trained
              and encouraged to constantly upgrade their skills and are also
              abreast with the latest technologies and trends.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        {/* Heading & intro */}
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            About Techware Solutions
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            At Techware Solutions, we are passionate about building modern,
            scalable, and user-friendly digital products. With expertise across
            web development, app development, UI/UX design, and digital
            marketing, we help businesses grow and succeed in the digital era.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-700">
              To deliver innovative and customized IT solutions that drive
              measurable results and empower businesses to reach their full
              potential.
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-700">
              To become a trusted global technology partner known for
              creativity, quality, and excellence in every project we undertake.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto mt-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-700">
                Skilled developers and designers delivering quality work on
                time.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Client-Centric Approach
              </h3>
              <p className="text-gray-700">
                We understand your needs and tailor solutions that work for your
                business.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                Latest Technologies
              </h3>
              <p className="text-gray-700">
                We use modern frameworks and tools for scalable and secure
                products.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Us button */}
        <div className="text-center mt-12">
          <button
            onClick={handleClick}
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
          >
            Contact Us
          </button>
        </div>
      </section>

      <section className="px-4 md:px-8 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 uppercase">
            About Techware Solution
          </h1>
        </div>

        {/* Who We Are Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <img
              src={aboutImage1}
              alt="Who We Are"
              className="rounded-lg shadow-md w-full object-cover "
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold uppercase tracking-widest mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For the last 12 years, <strong>Techware Solution</strong> has been
              at the forefront of the IT services industry, delivering reliable,
              innovative, and tailored technology solutions to businesses of all
              sizes. Our team of seasoned professionals provides expertise in{" "}
              <strong>
                firewall configuration, network management, server installation,
                cybersecurity
              </strong>
              , and <strong>cloud computing</strong> — ensuring your IT
              infrastructure is secure, efficient, and scalable.
              {/* <br />
              <br />
              Over the past decade, we have built long-term partnerships with
              clients by consistently exceeding expectations and driving
              business success. Our commitment to excellence, combined with
              cutting-edge solutions, has allowed us to grow into a trusted
              partner for numerous organizations across various industries. */}
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center py-2">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold uppercase tracking-widest mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At <strong>Techware Solution</strong>, our mission has always been
              to empower businesses through technology. We focus on providing
              customized IT solutions that not only solve immediate challenges
              but also help our clients scale for future growth.
            </p>
          </div>
          <div>
            <img
              src={aboutImg2}
              alt="Our Mission"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-16 py-15">
          <div>
            <img
              src={aboutImage3}
              alt="our vision"
              className="rounded-lg shadow-md w-full object-cover"
            />
          </div>
          {/* {Our vision} */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold uppercase tracking-widest mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As we look to the future, our vision remains to continue
              delivering top-tier IT services that help businesses stay
              competitive in a rapidly evolving digital landscape. We strive to
              be the go-to partner for businesses looking to innovate and grow,
              backed by 12 years of proven expertise and success.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
