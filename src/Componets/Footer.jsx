// import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerBg from "../assets/coffee-footer.jpg";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const bgImage = {
  backgroundImage: `url(${footerBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <>
      <section>
        <div style={bgImage} className="text-white">
          <div className="bg-black/40 min-h-[400px]">
            <div className="container grid md:grid-cols-3 pb-20 pt-5">
              {/* company details  */}
              <div className="py-8 px-4">
                <a
                  href="#"
                  className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
                >
                  {" "}
                  Coffee Cafe
                </a>
                <p className="pt-4">
                  {" "}
                  Crafted Coffee, Cozy Vibes, Unforgettable Moments – Your
                  Perfect Espresso Escape
                </p>
              </div>
              {/* Footer Links  */}
              <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                {/* first col Links  */}
                <div className="py-8 px-4">
                  <h1 className="text-xl font-semibold sm:text-left mb-3">
                    {" "}
                    Footer Links
                  </h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((data, index) => (
                      <li key={index}>
                        <a
                          href={data.link}
                          className="inline-block hover:scale-105 duration-200"
                        >
                          {data.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Second col Links  */}
                <div className="py-8 px-4">
                  <h1 className="text-xl font-semibold sm:text-left mb-3">
                    {" "}
                    Quick Links
                  </h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((data, index) => (
                      <li key={index}>
                        <a
                          href={data.link}
                          className="inline-block hover:scale-105 duration-200"
                        >
                          {data.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company Address Section  */}
                <div className="py-8 px-4 col-span-2 sm:col-auto">
                  <h1 className="text-xl font-semibold sm:text-left mb-3">
                    Address
                  </h1>
                  <div>
                    <p className="mb-3">Noida, India</p>
                    <p>+91 1234567899</p>

                    {/* social Links  */}
                    <div className="space-x-3 mt-6">
                        <a href="#">
                            <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200"/>
                        </a>
                        <a href="#">
                            <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200"/>
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl inline-block hover:scale-105 duration-200"/>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
