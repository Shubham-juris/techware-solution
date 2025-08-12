import Home from "../Hero/Home";
import { Routes, Route } from "react-router-dom";

import About from "../About/About";
import Career from "../careers/Career";
import Technologice from "../technologies/Technologice";
import ContactUs from "../contactUs/ContactUs";
import WebDevelopmentServices from "../components/WebDevelopmentServices";
import AppDevelopmentServices from "../components/AppDevelopmentServices";
import UiUxDesignServices from "../components/UiUxDesignServices";
import SoftwareDevelopment from "../components/SoftwareDevelopment";
import DigitalMarketingServices from "../components/DigitalMarketingServices";
import { ScrollToTop } from "../TopToScrool";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/technologice" element={<Technologice />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="/web-development" element={<WebDevelopmentServices />} />
        <Route path="/app-development" element={<AppDevelopmentServices />} />
        <Route path="/ui-ux-designer" element={<UiUxDesignServices />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route
          path="/digital-marketing"
          element={<DigitalMarketingServices />}
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
