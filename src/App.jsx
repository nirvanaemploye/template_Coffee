import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Componets/Navbar";
import Home from "./Componets/Home";
import Services from "./Componets/Services";
import Banner from "./Componets/Banner";
import AppStore from "./Componets/AppStore";
import Testimonials from "./Componets/Testimonials";
import Footer from "./Componets/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ offset: 100, duration: 700, easing: "ease-in", delay: 200 });
  });
  return <div className="overflow-x-hidden">
    <Navbar/>
    <Home/>
    <Services/>
    <Banner/>
    <AppStore/>
    <Testimonials/>
    <Footer/>
  </div>;
};

export default App;
