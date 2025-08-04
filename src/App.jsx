import Footer from "./commonComponents/Footer";
import Navbar from "./commonComponents/Navbar";
import HeroSection from "./Hero/HeroSection";
import AppRoutes from "./routers/AppRoutes";
function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
