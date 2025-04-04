import footerBg from "../../../assets/Footer.png";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import { MdEmail, MdFacebook, MdKeyboardArrowRight, MdLocationOn } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router";

const menus = [
  { id: 1, name: "Home", link: "/home" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Services", link: "/services" },
  { id: 4, name: "Contact Us", link: "/contact" },
];

const bgImage = {
  backgroundImage: `url(${footerBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  width: "100%",
};

const Footer = () => {
  return (
    <footer style={bgImage} className="2xl:py-48 lg:py-28 py-10">
      <div className="container text-white p-10">
        <div data-aos="fade" className="grid grid-cols-1 md:grid-cols-3 gap-y-8 ">
          {/* Socical Links  */}
          <div className="xl:space-y-12 space-y-6">
            <h1 className="font-semibold text-5xl">Logo</h1>
            <p className="xl:text-xl text-md tracking-widest text-gray-50">
              Lorem ipsum dolor sit amet, consectetur adipisc pulvinar ligula
              hendrerit, blandit arcu vitae,rutrum Vestibulum a sem in sapien
              malesuada consequat.
            </p>
            <div className="flex gap-x-5 text-3xl lg:text-4xl">
              <MdFacebook className="cursor-pointer hover:text-primary" />
              <AiFillTwitterCircle className="cursor-pointer hover:text-primary" />
              <AiFillGoogleCircle className="cursor-pointer hover:text-primary" />
              <RiWhatsappFill className="cursor-pointer hover:text-primary" />
            </div>
          </div>
          {/* Links Div  */}
          <div className="md:space-y-10 space-y-5 md:mx-auto">
            <h1 className="xl:text-3xl text-2xl font-bold text-primary">EXPLORE</h1>
            <div className="">
              <ul className="lg:space-y-8 space-y-4">
                {menus.map((data) => (
                  <li key={data.id} className="flex gap-x-2 hover:text-primary duration-300">
                    <span className="text-3xl"><MdKeyboardArrowRight />
                    </span>
                    <a
                      href={data.link}
                      className="uppercase lg:text-xl font-medium "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Contact Link  */}
          <div className="md:space-y-10 space-y-5 sm:mx-auto ">
            <h1 className="xl:text-3xl text-2xl font-bold text-primary">GET IN TOUCH </h1>
            <div className="lg:space-y-8 space-y-4">
              <p className="flex gap-x-3 xl:text-2xl sm:text-xl font-medium">
                <span className="text-primary xl:text-4xl text-3xl ">
                  <MdLocationOn />
                </span>
                66 Dennie, VJ City, Paris, 5010
              </p>
              <p className="flex gap-x-3 xl:text-2xl sm:text-xl font-medium" >
                <span className="text-primary xl:text-4xl text-3xl">
                  <IoMdCall />
                </span>
                568760022700
              </p>
              <p className="flex gap-x-3 xl:text-2xl sm:text-xl font-medium">
                <span className="text-primary xl:text-4xl text-3xl">
                  <MdEmail />
                </span>
                coffeecafeexample.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
