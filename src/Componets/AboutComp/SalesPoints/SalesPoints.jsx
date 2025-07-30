import { MdKeyboardArrowRight } from "react-icons/md";
import MapImg from "../../../assets/AboutCompImg/map.png";

const City = [
  {
    id: 1,
    CityName: "Canada",
  },
  {
    id: 2,
    CityName: "Tokyo",
  },
  {
    id: 3,
    CityName: "London",
  },
  {
    id: 4,
    CityName: "Australia",
  },
  {
    id: 5,
    CityName: "Egypt",
  },
  {
    id: 6,
    CityName: "Paris",
  },
  {
    id: 7,
    CityName: "India",
  },
  {
    id: 8,
    CityName: "America",
  },
  {
    id: 9,
    CityName: "New York",
  },
];
const SalesPoints = () => {
  return (
    <section className="py-16 bg-primary/15">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="p-3 space-y-5">
            <p data-aos="fade-down" className="text-3xl md:text-5xl font-bold">Sales And Delivery Points</p>
            <p data-aos="fade-down" className="text-sm sm:text-lg tracking-wider">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industrys dummy text since the 1500s, printer took a galley of
              type and scrambled.
            </p>
            <div data-aos="fade-right" className="pt-5 sm:pt-10 lg:pt-20">
              <h1 className="font-bold text-2xl sm:text-3xl text-primary">
                Where buy our coffee:
              </h1>
              <div className="grid grid-cols-3 gap-y-4 py-5 sm:pr-20">
                {City.map((data) => (
                  <a key={data.id} className="flex items-center font-bold sm:text-2xl text-gray-800 cursor-pointer">
                    <MdKeyboardArrowRight className="text-black text-sm sm:text-4xl mr-1" />
                    {data.CityName}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="w-full aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3997.609358642894!2d2.330517558938831!3d48.866467383689056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e25e28c0291%3A0xe5ed96cd530ca0e5!2sStarbucks%20Coffee!5e1!3m2!1sen!2sin!4v1753896288217!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default SalesPoints;
