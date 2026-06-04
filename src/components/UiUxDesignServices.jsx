// import React from "react";
// import uiuxImg from "../assets/services/UIUXDesignerImg.png";
// import { useNavigate } from "react-router-dom";

// const UiUxDesignServices = () => {
//   const navigate = useNavigate();

//   const handleClickbutton = () => {
//     navigate("/contact");
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="py-10 px-4 md:px-8 lg:px-16 bg-white">
//         <div className="max-w-5xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
//             UI/UX Design Services
//           </h1>
//           <div className="h-1 w-24 bg-red-500 mx-auto mb-8"></div>

//           <p className="text-gray-700 text-lg mb-6 leading-relaxed">
//             At <span className="font-semibold">Techware Solution</span>, we
//             believe that great design is more than just aesthetics — it’s about
//             creating meaningful and intuitive experiences that delight users and
//             drive business success. Our expert UI/UX design team transforms
//             complex ideas into clean, user-friendly interfaces that work
//             seamlessly across all devices.
//           </p>

//           <p className="text-gray-700 mb-6 leading-relaxed">
//             We follow a user-centered design approach, starting with in-depth
//             research, wireframing, prototyping, and usability testing. This
//             ensures that the final product not only looks stunning but also
//             solves real problems and improves usability.
//           </p>

//           <p className="text-gray-700 leading-relaxed">
//             Whether you need a sleek mobile app interface, a responsive website,
//             or a complete product redesign, we craft every detail with precision
//             and purpose.
//           </p>

//           {/* Process & Tools */}
//           <div className="grid md:grid-cols-2 gap-12 text-left mt-12">
//             <div>
//               <h2 className="text-xl font-semibold mb-3 text-blue-700">
//                 Our Process
//               </h2>
//               <div className="h-1 w-12 bg-red-500 mb-4"></div>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>User research & personas</li>
//                 <li>Wireframes & prototyping</li>
//                 <li>Visual design</li>
//                 <li>Usability testing</li>
//               </ul>
//             </div>

//             <div>
//               <h2 className="text-xl font-semibold mb-3 text-blue-700">
//                 Tools We Use
//               </h2>
//               <div className="h-1 w-12 bg-red-500 mb-4"></div>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li>Figma</li>
//                 <li>Adobe XD</li>
//                 <li>Sketch</li>
//                 <li>InVision</li>
//               </ul>
//             </div>
//           </div>

//           <button
//             className="mt-10 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
//             onClick={handleClickbutton}
//           >
//             Contact Us
//           </button>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
//           <div className="w-full md:w-1/2">
//             <img
//               src={uiuxImg}
//               alt="UI/UX Design Illustration"
//               className="w-full max-h-[420px] object-contain mx-auto"
//             />
//           </div>

//           <div className="w-full md:w-1/2">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
//               Our UI/UX Services Include:
//             </h2>
//             <div className="h-1 w-12 bg-red-500 mb-6"></div>

//             <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 mb-6">
//               <li>User Research & Journey Mapping</li>
//               <li>Wireframing & Prototyping</li>
//               <li>Responsive Web Design</li>
//               <li>Mobile App UI Design</li>
//               <li>Interaction Design</li>
//               <li>UX Audit & Usability Testing</li>
//             </ul>

//             <p className="text-gray-700 text-lg mb-4">
//               We leverage tools like Figma, Adobe XD, Sketch, and InVision to
//               deliver modern, scalable, and pixel-perfect interfaces. Every
//               design is optimized for performance and accessibility.
//             </p>

//             <p className="text-gray-700">
//               From startups to enterprise applications, our team has delivered
//               impactful solutions in e-commerce, healthcare, education, and SaaS
//               industries. Let us help you create a product that looks amazing
//               and delivers an unforgettable user experience.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default UiUxDesignServices;


import React from "react";
import uiuxImg from "../assets/services/UIUXDesignerImg.png";
import { useNavigate } from "react-router-dom";

const UiUxDesignServices = () => {
  const navigate = useNavigate();

  const handleClickbutton = () => {
    navigate("/contact");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-10 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            UI/UX Design Services
          </h1>

          <div className="h-1 w-24 bg-red-500 mx-auto mb-8"></div>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            At <span className="font-semibold">Techware Solution</span>, we
            design intuitive and user-centered digital experiences that combine
            functionality with simplicity. Our focus is on creating interfaces
            that are visually consistent, easy to use, and aligned with your
            business objectives.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            We follow a structured design process that includes user research,
            information architecture, wireframing, prototyping, and usability
            testing. This ensures that every design decision is backed by data
            and focused on improving user experience.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Whether it is a mobile application, web platform, or enterprise
            system, we design scalable interfaces that enhance usability,
            accessibility, and overall product performance.
          </p>

          {/* Process & Tools */}
          <div className="grid md:grid-cols-2 gap-12 text-left mt-12">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-700">
                Design Process
              </h2>

              <div className="h-1 w-12 bg-red-500 mb-4"></div>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>User Research & Requirement Analysis</li>
                <li>Information Architecture & Wireframing</li>
                <li>Interactive Prototyping</li>
                <li>UI Design & Visual Consistency</li>
                <li>Usability Testing & Iteration</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-blue-700">
                Tools We Use
              </h2>

              <div className="h-1 w-12 bg-red-500 mb-4"></div>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Sketch</li>
                <li>InVision</li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="mt-10 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
            onClick={handleClickbutton}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={uiuxImg}
              alt="UI/UX Design Services"
              className="w-full max-h-[420px] object-contain mx-auto"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              UI/UX Design Services We Provide
            </h2>

            <div className="h-1 w-12 bg-red-500 mb-6"></div>

            <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 mb-6">
              <li>User Research & Journey Mapping</li>
              <li>Wireframing & Prototyping</li>
              <li>Responsive Web Design</li>
              <li>Mobile App Interface Design</li>
              <li>Interaction Design</li>
              <li>UX Audit & Usability Testing</li>
            </ul>

            <p className="text-gray-700 text-lg mb-4">
              We use industry-standard tools such as Figma, Adobe XD, Sketch,
              and InVision to design clean, scalable, and user-friendly
              interfaces. Our focus is on delivering designs that balance
              usability, accessibility, and performance.
            </p>

            <p className="text-gray-700 text-lg">
              Our experience spans multiple industries including e-commerce,
              healthcare, education, and SaaS platforms. We design digital
              products that improve user engagement and enhance overall
              business performance through better user experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default UiUxDesignServices;
