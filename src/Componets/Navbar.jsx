import logo from "../assets/coffee_logo.png";
import { FaCoffee } from "react-icons/fa";

const Navbar = () => {
  const menus = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "Services",
      link: "#",
    },
    {
      id: 3,
      name: "About",
      link: "#about",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-secondary to-primary/90 text-white">
      <nav className="container py-2 ">
        <div className="flex justify-between items-center gap-4">
          {/* Logo Section */}
          <div data-aos="fade-down" data-aos-once="true" data-aos-delay="200">
            <a
              href="#home"
              className="font-bold text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
            >
              <img src={logo} alt="logo" className="w-14" />
              Coffee Cafe
            </a>
          </div>
          {/* Links Section */}
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-delay="200"
            className="flex justify-between items-center gap-6"
          >
            <ul className="hidden sm:flex items-center gap-6">
              {menus.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block text-xlpy4
                  px-4 text-white/70 hover:text-white duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-primary/70 px-4 py-2 rounded-full hover:scale-105 duration-200 flex items-center gap-2">
              Order
              <FaCoffee className="text-xl cursor-pointer" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
