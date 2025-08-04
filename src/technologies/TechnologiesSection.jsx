import React from "react";
import technologiesHeroImage from "../assets/technologices/technologiesImage2.jpg";
const TechnologiesSection = () => {
  const logos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0a/VMware_logo.svg",
      alt: "VMware",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      alt: "Microsoft",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/48/Hewlett_Packard_Enterprise_logo.svg",
      alt: "Hewlett Packard",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Cisco_logo_blue_2016.svg",
      alt: "Cisco",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Citrix_Systems_logo.svg",
      alt: "Citrix XenApp",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Veritas_logo.svg",
      alt: "Veritas",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Palo_Alto_Networks_logo.svg",
      alt: "Palo Alto Networks",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Symantec_logo.svg",
      alt: "Symantec",
    },
  ];
  return (
    <section className="w-full">
      {/* Header Image */}
      <div className="relative">
        <img
          src={technologiesHeroImage}
          alt="Technologies"
          className="w-full h-56 md:h-80 object-cover"
        />

        {/* Optional: Breadcrumb */}
        <div className="absolute top-14 right-4 flex gap-2 text-white">
          <a href="/" className="hover:underline">
            Home
          </a>
          <span>/</span>
        </div>
      </div>

      {/* Title */}
      <div className="text-center px-4 py-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          We deliver state-of-the-art technology solutions to enterprises in
          association with our global leading partners.
        </h2>
      </div>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 pb-8 max-w-6xl mx-auto">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center border border-red-400 p-4 bg-white rounded shadow hover:shadow-md transition"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
