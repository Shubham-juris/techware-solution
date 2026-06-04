// import React from "react";
// import softwareImg from "../assets/services/softwareDevelopmentImg.png";
// import { useNavigate } from "react-router-dom";

// const SoftwareDevelopment = () => {
//   const navigate = useNavigate();
//   const handleClickbutton = () => navigate("/contact");

//   return (
//     <>
//       {/* Top Section */}
//       <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
//             Software Development Services
//           </h1>
//           <div className="h-1 bg-red-500 mx-auto mb-6 w-16"></div>

//           <p className="text-gray-700 text-lg mb-6">
//             At <span className="font-semibold">Techware Solution</span>, we
//             provide custom software development services that help businesses
//             innovate, automate, and grow. Our goal is to build reliable, secure,
//             and scalable solutions tailored to your unique requirements.
//           </p>

//           <p className="text-gray-700 text-lg mb-6">
//             Software development is not just about writing code — it’s about
//             solving real-world problems through technology. We take a strategic
//             approach to every project, starting with deep research and planning,
//             collaborating closely with you to ensure the right solution.
//           </p>

//           <p className="text-gray-700 text-lg mb-6">
//             We specialize in building custom web apps, enterprise software,
//             cloud-based solutions, and cross-platform tools using{" "}
//             <span className="font-medium">
//               JavaScript, Python, .NET, Node.js, React
//             </span>{" "}
//             and more. Whether you need an internal tool or a customer-facing
//             product, we deliver high-quality results.
//           </p>

//           <p className="text-gray-700 text-lg mb-6">
//             Our process follows industry best practices — Agile methodology,
//             code reviews, automated testing, and continuous integration — to
//             ensure your product is robust and future-ready.
//           </p>

//           {/* What We Build + Technologies */}
//           <div className="grid md:grid-cols-2 gap-12 text-left mt-10">
//             <div>
//               <h2 className="text-xl font-semibold mb-2 text-blue-700">
//                 What We Build
//               </h2>
//               <div className="h-1 w-12 bg-red-500 mb-4"></div>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>ERP & CRM systems</li>
//                 <li>Inventory & billing solutions</li>
//                 <li>Custom dashboards</li>
//                 <li>API integrations</li>
//               </ul>
//             </div>

//             <div>
//               <h2 className="text-xl font-semibold mb-2 text-blue-700">
//                 Technologies
//               </h2>
//               <div className="h-1 w-12 bg-red-500 mb-4"></div>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>Node.js & Express</li>
//                 <li>Python & Django</li>
//                 <li>React.js frontend</li>
//                 <li>MongoDB & PostgreSQL</li>
//               </ul>
//             </div>
//           </div>

//           {/* CTA Button */}
//           <button
//             onClick={handleClickbutton}
//             className="mt-10 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition"
//           >
//             Contact Us
//           </button>
//         </div>
//       </section>

//       {/* Image + Detailed Services */}
//       <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
//           {/* Image */}
//           <div className="w-full md:w-1/2 flex justify-center">
//             <img
//               src={softwareImg}
//               alt="Software Development Illustration"
//               className="w-full max-w-[500px] object-contain"
//             />
//           </div>

//           {/* Content */}
//           <div className="w-full md:w-1/2">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
//               Our Services Include:
//             </h2>
//             <div className="h-1 w-12 bg-red-500 mb-6"></div>

//             <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 mb-6">
//               <li>Custom Software Development</li>
//               <li>Enterprise Software Solutions</li>
//               <li>Web & Cloud-based Application Development</li>
//               <li>Software Product Engineering</li>
//               <li>Software Maintenance & Support</li>
//               <li>Legacy Software Modernization</li>
//             </ul>

//             <p className="text-gray-700 text-lg mb-4">
//               We are committed to delivering high-performance solutions that
//               align with your vision, budget, and timeline. From idea validation
//               to deployment and ongoing support,{" "}
//               <span className="font-semibold">Techware Solution</span> is your
//               trusted technology partner.
//             </p>
//             <p className="text-gray-700 text-lg">
//               Whether you are a startup looking to develop an MVP or an
//               enterprise needing a scalable digital system, we are here to help.
//               Let’s build something powerful together.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default SoftwareDevelopment;

import React from "react";
import softwareImg from "../assets/services/softwareDevelopmentImg.png";
import { useNavigate } from "react-router-dom";

const SoftwareDevelopment = () => {
  const navigate = useNavigate();

  const handleClickbutton = () => navigate("/contact");

  return (
    <>
      {/* Top Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Software Development Services
          </h1>

          <div className="h-1 bg-red-500 mx-auto mb-6 w-16"></div>

          <p className="text-gray-700 text-lg mb-6">
            At <span className="font-semibold">Techware Solution</span>, we
            deliver custom software development services that enable businesses
            to innovate, automate processes, and achieve sustainable growth.
            Our solutions are designed to be secure, scalable, and aligned with
            your business objectives.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            Software development goes beyond writing code—it involves solving
            complex business challenges through well-structured technology
            solutions. We follow a strategic approach that includes analysis,
            planning, development, and continuous collaboration to ensure the
            right outcome.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            We specialize in developing custom web applications, enterprise
            systems, cloud-based platforms, and cross-platform solutions using
            technologies such as{" "}
            <span className="font-medium">
              JavaScript, Node.js, Python, .NET, and React
            </span>
            . Our focus is on building reliable and efficient systems tailored
            to your operational needs.
          </p>

          <p className="text-gray-700 text-lg mb-6">
            Our development process follows industry best practices, including
            Agile methodology, structured code reviews, automated testing, and
            continuous integration to ensure long-term stability and
            maintainability.
          </p>

          {/* What We Build + Technologies */}
          <div className="grid md:grid-cols-2 gap-12 text-left mt-10">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                What We Build
              </h2>

              <div className="h-1 w-12 bg-red-500 mb-4"></div>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>ERP and CRM Systems</li>
                <li>Inventory and Billing Systems</li>
                <li>Custom Business Dashboards</li>
                <li>API Development and Integrations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Technologies
              </h2>

              <div className="h-1 w-12 bg-red-500 mb-4"></div>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>React.js</li>
                <li>MongoDB & PostgreSQL</li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClickbutton}
            className="mt-10 bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Image + Detailed Services */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={softwareImg}
              alt="Software Development Services"
              className="w-full max-w-[500px] object-contain"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              End-to-End Software Development Services
            </h2>

            <div className="h-1 w-12 bg-red-500 mb-6"></div>

            <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 mb-6">
              <li>Custom Software Development</li>
              <li>Enterprise Application Development</li>
              <li>Web and Cloud-Based Solutions</li>
              <li>Software Product Engineering</li>
              <li>Application Maintenance and Support</li>
              <li>Legacy System Modernization</li>
            </ul>

            <p className="text-gray-700 text-lg mb-4">
              We focus on delivering high-performance software solutions that
              align with your business goals, technical requirements, and
              budget. From concept to deployment,{" "}
              <span className="font-semibold">Techware Solution</span> ensures
              quality at every stage of development.
            </p>

            <p className="text-gray-700 text-lg">
              Whether you are a startup building your first product or an
              enterprise scaling complex systems, we provide reliable and
              scalable software solutions designed for long-term success and
              operational efficiency.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareDevelopment;
