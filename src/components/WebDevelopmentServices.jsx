import webImage from "../assets/services/webDevlopmentImg.png";
import { useNavigate } from "react-router-dom";
const WebDevelopmentServices = () => {
  const navigate = useNavigate();
  const handleClickbutton = () => {
    navigate("/contact");
  };
  return (
    <>
      <section className="py-7 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Web Development Services
          </h1>
          <div className="h-1  bg-red-500 mb-6"></div>
          <p className="text-gray-700 text-lg mb-6 py-9">
            We craft responsive, SEO-friendly websites tailored to your business
            needs using the latest technologies like React.js, Next.js, and
            more. At Techware Solutions, we specialize in crafting modern,
            responsive, and user-friendly websites tailored to meet your
            business needs. In today's digital age, your website is more than
            just a virtual presence — it’s the face of your brand. A
            well-developed website not only attracts visitors but also builds
            trust, drives engagement, and turns leads into loyal customers.
          </p>
          <p>
            Our web development team is skilled in the latest technologies
            including HTML5, CSS3, JavaScript, React.js, Next.js, Node.js, and
            more. Whether you need a simple portfolio site, an e-commerce
            platform, or a complex web application, we deliver fully functional
            and scalable solutions. Each website we build is optimized for
            speed, performance, SEO, and mobile responsiveness, ensuring that
            your visitors have a seamless experience across all devices.
          </p>
          <p className="text-gray-700 text-lg mb-6 py-9">
            We follow a client-centric approach, beginning with an in-depth
            consultation to understand your vision, goals, and target audience.
            From design to deployment and ongoing support, we handle every step
            of the development process with attention to detail and a commitment
            to quality.
          </p>
          <div className="grid md:grid-cols-2 gap-80 text-left mt-8">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Why choose us?
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700">
                <li>Custom website design & development</li>
                <li>Responsive and mobile-first approach</li>
                <li>Fast-loading, SEO optimized sites</li>
                <li>Integration with CMS & APIs</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-blue-700">
                Our expertise
              </h2>
              <div className="h-1 w-12 bg-red-500 mb-6"></div>
              <ul className="list-disc list-inside text-gray-700">
                <li>React.js, Next.js, Node.js</li>
                <li>WordPress & Headless CMS</li>
                <li>eCommerce solutions</li>
                <li>Maintenance & support</li>
              </ul>
            </div>
          </div>
          <button
            className="mt-8 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            onClick={handleClickbutton}
          >
            Contact Us
          </button>
        </div>
      </section>
      <section className="py-6 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={webImage}
              alt="Web Development Illustration"
              className="w-full max-h-106 object-contain mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Our services include:
            </h2>
            <div className="h-1 w-12 bg-red-500 mb-6"></div>
            <div className="py-2 px-4">
              <ul className="list-disc list-inside text-lg text-gray-800 space-y-2">
                <li>Custom Website Development</li>
                <li>E-commerce Website Development</li>
                <li>CMS Integration (WordPress, Shopify, etc.)</li>
                <li>Landing Page Design</li>
                <li>API Integration</li>
                <li>Maintenance and Support</li>
              </ul>
            </div>
            <p className="text-gray-700 text-lg py-3">
              In addition, we offer UI/UX design services to ensure your website
              is not only functional but also visually appealing. Our designers
              work closely with developers to create interfaces that are
              intuitive and conversion-focused. With years of experience and a
              passion for technology, Techware Solutions stands out as a trusted
              partner in the web development industry. Let us help you build a
              powerful online presence that makes an impact.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopmentServices;
