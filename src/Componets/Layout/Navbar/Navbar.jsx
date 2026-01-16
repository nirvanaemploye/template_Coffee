import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.svg";
import ShopLogo from "../../../assets/OrderLogo.svg";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
import { CgMenuOreos } from "react-icons/cg";

const Navbar = ({ className = "" }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Service", link: "/service" },
    { id: 4, name: "Contact Us", link: "/contact" },
  ];

  return (
    <div className={`relative z-[999] bg-transparent text-white ${className}`}>
      <nav className="container py-2 sm:border-none border-b border-primary">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <Link
            to="/"
            className={`font-bold flex items-baseline ${isHomePage ? "text-black" : "text-white"
              } text-lg sm:text-[28px] tracking-wide`}
          >
            <img
              src={logo}
              alt="logo"
              className="sm:w-9 w-7 mr-2 align-middle"
            />
            BrewBeans
          </Link>


          {/* Links + Button */}
          <div className="flex items-center gap-2 lg:gap-8">
            <ul className="hidden xl:flex items-center gap-4 text-primary">
              {menus.map((data) => {
                const isActive = location.pathname === data.link;

                return (
                  <li key={data.id}>
                    <Link
                      to={data.link}
                      className={`inline-block text-xl py-1 px-4 font-bold duration-300 relative group 
  ${isActive
                          ? isHomePage
                            ? "text-black" // active & home page
                            : "text-primary" // active & not home page
                          : isHomePage
                            ? "text-white hover:text-black" // not active & home page
                            : "text-white hover:text-primary" // not active & not home page
                        }`}

                    >
                      <span
                        className={`absolute -bottom-1 left-1/2 transition-all h-0.5 
                ${isActive ? "bg-primary w-2/6" : "w-0 group-hover:w-2/6"} 
                ${isHomePage && !isActive ? "bg-white" : ""}`}
                      ></span>
                      <span
                        className={`absolute -bottom-1 right-1/2 transition-all h-0.5 
                ${isActive ? "bg-primary w-2/6" : "w-0 group-hover:w-2/6"} 
                ${isHomePage && !isActive ? "bg-white" : ""}`}
                      ></span>
                      {data.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Order Button */}
            <button
              onClick={() => navigate("/order")}
              className="flex items-center gap-x-2 py-1.5 px-2.5 sm:py-2.5 sm:px-5 text-sm font-bold bg-white text-black rounded-full hover:text-primary duration-200 xl:border-none border border-primary"
            >
              Order
              <img src={ShopLogo} alt="Shop Logo" className="w-5" />
            </button>

            {/* Mobile Menu Icon */}
            <button className="xl:hidden" onClick={() => setIsOpen(!isOpen)}>
              <CgMenuOreos className="text-3xl text-primary" />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      <ResponsiveMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </div>
  );
};

export default Navbar;
