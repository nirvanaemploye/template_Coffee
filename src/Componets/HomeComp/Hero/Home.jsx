import Heroimg from "../../../assets/HomeCompImg/Coffee.png";
import HeroBg from "../../../assets/HomeCompImg/HomeBg.webp";
import HeroBgBg from "../../../assets/HomeCompImg/HeroBg.svg";
import Bnans from "../../../assets/HomeCompImg/Bnanss.png";
import PrimaryButton from "../../Layout/PrimaryButton";
import Navbar from "../../Layout/Navbar/Navbar";

const Home = () => {
  return (
    <section className="xl:container 2xl:px-0 relative text-black z-10">
      {/* Background Image */}
      <img
        src={HeroBg}
        alt="Background"
        className="hidden xl:block absolute 2xl:top-0 -top-12 right-0  max-w-2xl 2xl:max-w-none scale-105 2xl:scale-125 2xl:w-5.5/12 2xl:pl-[42rem]"
      />
      <img
        src={HeroBgBg}
        alt="Background"
        className="xl:hidden h-80 sm:h-auto absolute right-0 top-10 sm:top-12  "
      />

      {/* Navbar */}
      <Navbar className="hover:text-black" />

      {/* Main Content */}
      <div className="container 4k:pr-0 sm:py-6 2xl:py-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center relative 4k:px-0">
          {/* Text Content Section */}
          <div className=" order-2 sm:order-1 flex flex-col gap-7 2xl:gap-10 ">
            <img
              data-aos="zoom-in"
              src={Bnans}
              alt="Decoration"
              className="absolute top-0 right-2/3 2xl:right-1/2 hidden xl:block h-20 mx-9 2xl:m-0 -me-32 2xl:pr-12"
            />
            <h1
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="100"
              className="text-4xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-black"
            >
              We serve the richest{" "}
              <span
                data-aos="zoom-in"
                data-aos-delay="300"
                data-aos-duration="100"
                className="text-primary font-cursive"
              >
                Coffee
              </span>{" "}
              in the city
            </h1>
            <p data-aos="zoom-in" className="w-11.5/12 text-black/50 lg:text-lg text-sm" >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div>
              <PrimaryButton className="text-white border">
                Read More
              </PrimaryButton>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-1 sm:order-2 4k:min-h-[450px] mx-auto ">
            <img
              data-aos="zoom"
              src={Heroimg}
              alt="Coffee Cup"
              className="mx-auto spin p-5 2xl:ml-12"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
