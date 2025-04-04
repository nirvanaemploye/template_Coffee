import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Componets/Layout/Navbar/Navbar";
import Home from "./Componets/HomeComp/Hero/Home";
import Testimonials from "./Componets/HomeComp/Testimonials/Testimonials";
import Footer from "./Componets/Layout/Footer/Footer";
import HowMade from "./Componets/HomeComp/HowMade/HowMade";
import Perfect from "./Componets/HomeComp/Perfect/Perfect";
import Favourite from "./Componets/HomeComp/Favourite/Favourite";
import Delights from "./Componets/HomeComp/Delights/Delights";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AboutHero from "./Componets/AboutComp/AboutHero/AboutHero";
import ServiceHero from "./Componets/ServiceComp/ServiceHero/ServiceHero";
import ContactUsHero from "./Componets/ContactUsComp/ContactUSHero/ContactUsHero";
import OrderHero from "./Componets/OrderComp/OrderHero/OrderHero";
import OurMission from "./Componets/AboutComp/OurMission/OurMission";
import Gallery from "./Componets/AboutComp/Gallery/Gallery";
import Speciality from "./Componets/AboutComp/Speciality/Speciality";
import SalesPoints from "./Componets/AboutComp/SalesPoints/SalesPoints";
import KeepInTouch from "./Componets/ContactUsComp/KeepInTouch/KeepInTouch";
import NewsOffers from "./Componets/ServiceComp/NewsOffers/NewsOffers";
import Address from "./Componets/ServiceComp/Address/Address";
import WhatWeOffer from "./Componets/ServiceComp/WhatWeOffer/WhatWeOffer";
import AddToCart from "./Componets/OrderComp/AddToCart/AddToCart";
import { CartProvider } from './context/CartContext';
import Order from './pages/Order';




const App = () => {
  useEffect(() => {
    AOS.init({ offset: 80, duration: 500, easing: "ease-in", delay: 200 , once: true });
  }, []);

  return (
    <CartProvider>
      <div className="overflow-x-hidden ">
        <BrowserRouter>
        
          <Routes>
            {/* Default Route */}
            
            <Route path="/" element={<Navigate to="/home" />} />
            

            {/* Home Page */}
            <Route
              path="/home"
              element={
                <>
                  <Home />
                  <HowMade />
                  <Perfect />
                  <Favourite />
                  <Delights />
                  <Testimonials />
                </>
              }
            />

            {/* About Page */}
            <Route
              path="/about"
              element={
                <>
                  <AboutHero/>
                  <OurMission />
                  <Gallery/>
                  <Speciality/>
                  <SalesPoints/>
                </>
              }
            />

            {/* Services Page */}
            <Route
              path="/services"
              element={
                <>
                  <ServiceHero />
                  <WhatWeOffer/>
                  <Address/>
                  <NewsOffers/>
                </>
              }
            />
            {/* Contact Us Page */}
            <Route
              path="/contact"
              element={
                <>
                  <ContactUsHero />
                  <KeepInTouch/>

                </>
              }
            />
            {/* order Us Page */}
            <Route
              path="/order"
              element={
                <>
                  <OrderHero />
                  <AddToCart/>
                </>
              }
            />
            <Route path="/order" element={<Order />} />
          </Routes>
        </BrowserRouter>
        <Footer/>
      </div>
    </CartProvider>
  );
};

export default App;
