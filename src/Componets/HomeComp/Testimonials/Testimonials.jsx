import Slider from "react-slick";
import dhruv from "../../../assets/HomeCompImg/Dhruv.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import BaseLine from "../../Layout/BaseLine";
import VectorN from "../../../assets/HomeCompImg/TestimonialsImg/VectorN.png";
import VectorH from "../../../assets/HomeCompImg/TestimonialsImg/VectorH.png";
import invertedcommasN from "../../../assets/HomeCompImg/TestimonialsImg/invertedcommasN.png";
import invertedcommasH from "../../../assets/HomeCompImg/TestimonialsImg/invertedcommasH.png";

// Testimonial Data
const testimonials = [
  {
    name: "Neil Wilford",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    image: dhruv, // Replace with actual image
    highlight: false,
  },
  {
    name: "Neil Wilford",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    image: dhruv, // Replace with actual image
    highlight: true,
  },
  {
    name: "Neil Wilford",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    image: dhruv, // Replace with actual image
    highlight: false,
  },
  {
    name: "Neil Wilford",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    image: dhruv, // Replace with actual image
    highlight: false,
  },
  {
    name: "Neil Wilford",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    image: dhruv, // Replace with actual image
    highlight: true,
  },
  
];

const Testimonials = () => {
  // Slick Slider Settings
const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1, // Scrolls 2 slides at a time for better UX
  autoplay: true, // Enables auto-sliding
  autoplaySpeed: 2000, // Slides every 3 seconds
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 2 } },
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};
  return (
    <section className="py-32 bg-primary/10">
      <div className="container">
        <div className="flex flex-col items-center space-y-6">
          <h1
            data-aos="fade"
            className="text-center font-bold sm:text-5xl text-3xl tracking-wider"
          >
            Testimonial
          </h1>
          <BaseLine />
        </div>
        {/* Testimonial Slider */}
        <div className="pt-20">
          <Slider {...settings} className="pb-4">
          {testimonials.map((testimonial, index) => (
           <div key={index} className="px-5">
               <div
              data-aos="zoom-in"
              key={index}
              className="flex flex-col text-center space-y-4 bg-white group gap-10"
            >
              <div className="space-y-5 p-8">
                <div className="">
                  <img
                    src={invertedcommasN}
                    alt=""
                    className="absolute group-hover:opacity-0 duration-300 transition-opacity"
                  />
                  <img
                    src={invertedcommasH}
                    alt=""
                    className="opacity-0 group-hover:opacity-100 duration-300 transition-opacity"
                  />
                </div>
                <p className="2xl:text-lg text-black/50 tracking-wider">{testimonial.text}</p>
                <div className="flex flex-col items-center justify-center 2xl:py-8 2xl:space-y-8 space-y-5">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-28 h-28 rounded-full  border-gray-300"
                  />
                <div className="z-10">
                  <p className="font-bold mt-2 xl:group-hover:text-white group-hover:text-white sm:group-hover:text-primary duration-300">
                    {testimonial.name}
                  </p>
                  <div className="flex justify-center items-center space-x-3 mt-2 text-3xl text-primary xl:group-hover:text-white group-hover:text-white sm:group-hover:text-primary duration-300">
                    <AiFillGoogleCircle className="cursor-pointer hover:text-secondary/50" />
                    <MdFacebook className="cursor-pointer hover:text-secondary/50" />
                    <RiWhatsappFill className="cursor-pointer hover:text-secondary/50" />
                  </div>
                </div>
              </div>
                </div>
              <div className="absolute bottom-0 w-full -z-10 ">
                <img
                  src={VectorN}
                  alt=""
                  className="text-primary w-full absolute bottom-0.5 "
                />
                <img
                  src={VectorH}
                  alt=""
                  className="text-primary w-full relative opacity-0 group-hover:opacity-100 duration-300 transition-opacity sm:hidden xl:block"
                />
              </div>
            </div>
           </div>
          ))}
        </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
