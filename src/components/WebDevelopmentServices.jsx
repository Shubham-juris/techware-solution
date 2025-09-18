import webImage from "../assets/services/webDevlopmentImg.png";
import { useNavigate } from "react-router-dom";

const WebDevelopmentServices = () => {
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
            Web Development Services
          </h1>
          <div className="h-1 w-24 bg-red-500 mx-auto mb-8"></div>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            At <span className="font-semibold">Techware Solutions</span>, we
            specialize in building modern, responsive, and user-friendly
            websites tailored to your business needs. In today’s digital world,
            your website is more than just an online presence — it’s the face of
            your brand. A well-developed site attracts visitors, builds trust,
            and turns leads into loyal customers.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Our team is skilled in technologies like HTML5, CSS3, JavaScript,
            React.js, Next.js, Node.js, and more. Whether it’s a portfolio site,
            e-commerce platform, or complex web application, we deliver scalable
            and high-performing solutions optimized for SEO, speed, and mobile
            responsiveness.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From design to deployment and ongoing support, we take a
            client-centric approach. Every step of the development process is
            handled with attention to detail and a commitment to quality.
          </p>

          {/* Why Choose Us + Expertise */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 text-left">
            {/* Why Choose Us */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Why Choose Us?
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-4"></div>
              <ul className="list-disc list-inside text-gray-700 space-y-4">
                <li>Custom website design & development</li>
                <li>Responsive and mobile-first approach</li>
                <li>Fast-loading, SEO optimized sites</li>
                <li>Integration with CMS & APIs</li>
              </ul>
            </div>

            {/* Our Expertise */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Our Expertise
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-4"></div>
              <ul className="list-disc list-inside text-gray-700 space-y-4">
                <li>React.js, Next.js, Node.js</li>
                <li>WordPress & Headless CMS</li>
                <li>E-commerce solutions</li>
                <li>Maintenance & support</li>
              </ul>
            </div>
          </div>

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
          <div className="w-full md:w-1/2">
            <img
              src={webImage}
              alt="Web Development Illustration"
              className="w-full max-h-[420px] object-contain mx-auto"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Our Web Development Services Include:
            </h2>
            <div className="h-1 w-12 bg-red-500 mb-6"></div>

            <ul className="list-disc list-inside text-lg text-gray-800 space-y-2 mb-6">
              <li>Custom Website Development</li>
              <li>E-commerce Website Development</li>
              <li>CMS Integration (WordPress, Shopify, etc.)</li>
              <li>Landing Page Design</li>
              <li>API Integration</li>
              <li>Maintenance & Support</li>
            </ul>

            <p className="text-gray-700 text-lg mb-4">
              We also provide UI/UX design services to ensure your website is
              visually appealing and user-friendly. Our designers and developers
              work together to deliver intuitive and conversion-focused digital
              experiences.
            </p>

            <p className="text-gray-700">
              With years of experience and a passion for innovation,{" "}
              <span className="font-semibold">Techware Solutions</span> is a
              trusted partner for businesses looking to establish a powerful
              online presence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopmentServices;
