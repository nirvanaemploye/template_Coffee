import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link
import logo from "../../../assets/Logo.png";
import ShopLogo from "../../../assets/OrderLogo.png";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { CgMenuOreos } from "react-icons/cg";

const Navbar = ({ children, className = "" }) => {
  const navigate = useNavigate(); // Initialize navigate hook
  const location = useLocation(); // Add this line
  const isHomePage = location.pathname === "/home"; // Add this line
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Contact Us", link: "/contact" },
  ];

  return (
    <div className={`z-[999] bg-transparent text-whit  ${className || ""}`}>
      <nav className="container py-2 lg:border-none border-b border-primary">
        <div className="flex justify-between items-center gap-4">
          {/* Logo Section */}
          <div data-aos="fade-down" data-aos-once="true" data-aos-delay="200">
            <Link
              to="/home"
              className={`font-bold ${
                isHomePage ? "text-black" : "text-white"
              } sm:text-xl lg:text-2xl flex justify-center items-baseline gap-2 tracking-wider`}
            >
              <img src={logo} alt="logo" className="lg:w-10 w-7" />
              Coffee Cafe
            </Link>
          </div>

          {/* Links Section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="200"
            className="flex justify-between items-center gap-2 lg:gap-8"
          >
            {/* Navigation Links */}
            <ul className="hidden lg:flex items-center gap-4 text-primary">
              {menus.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className={`inline-block text-xl py-1 px-4 ${
                      isHomePage ? "hover:text-black" : "hover:text-primary"
                    } text-white duration-300 relative group font-bold`}
                  >
                    <samp className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-2/6 ${isHomePage ? "bg-white" : "bg-primary"}`}></samp>
                    <samp className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-primary group-hover:w-2/6 ${isHomePage ? "bg-white" : "bg-primary"}`}></samp>
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Order Button */}
            <PrimaryButton
              onClick={() => navigate("/order")}
              className="flex justify-center items-center gap-x-2 rounded-full font-bold border border-primary  md:bg-white bg-white hover:text-primary duration-200 text-black text-sm"
            >
              Order
              <span>
                <img src={ShopLogo} alt="Shop Logo" className="w-5" />
              </span>
            </PrimaryButton>

            {/* Mobile Menu Icon */}
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              <CgMenuOreos className="text-3xl text-primary" />
            </button>
          </div>
        </div>
      </nav>
      {/* Responsive Menu */}
      <ResponsiveMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </div>
  );
};

export default Navbar;
