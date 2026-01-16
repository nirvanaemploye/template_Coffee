import { MdKeyboardArrowRight } from "react-icons/md";

const City = [
  { id: 1, CityName: "Canada" },
  { id: 2, CityName: "Tokyo" },
  { id: 3, CityName: "London" },
  { id: 4, CityName: "Australia" },
  { id: 5, CityName: "Egypt" },
  { id: 6, CityName: "Paris" },
  { id: 7, CityName: "India" },
  { id: 8, CityName: "America" },
  { id: 9, CityName: "New York" },
];

const SalesPoints = () => {
  return (
    <section className="py-8 md:py-16 bg-primary/15">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6">
          {/* Left Content */}
          <div className="p-3 space-y-5">
            <p
              data-aos="fade-down"
              className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold leading-snug"
            >
              Sales And Delivery Points
            </p>
            <p
              data-aos="fade-down"
              className="text-sm sm:text-base md:text-lg tracking-wide text-gray-700"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Since the 1500s, printers took a galley of type and
              scrambled it to make a type specimen book.
            </p>

            {/* City List */}
            <div data-aos="fade-right" className="pt-4 sm:pt-10 lg:pt-16">
              <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-primary mb-4">
                Where to buy our coffee:
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 sm:gap-y-4 sm:pr-10">
                {City.map((data) => (
                  <a
                    key={data.id}
                    className="flex items-center font-semibold sm:font-bold text-sm sm:text-lg md:text-xl text-gray-800 cursor-pointer hover:text-primary transition"
                  >
                    <MdKeyboardArrowRight className="text-black text-lg sm:text-2xl md:text-3xl mr-1" />
                    {data.CityName}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Map */}
          <div className="flex justify-center items-center w-full px-4 lg:px-0">
            <div className="w-full max-w-4xl aspect-video ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3997.609358642894!2d2.330517558938831!3d48.866467383689056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e25e28c0291%3A0xe5ed96cd530ca0e5!2sStarbucks%20Coffee!5e1!3m2!1sen!2sin!4v1753896288217!5m2!1sen!2sin"
                className="w-full h-full border-0"
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
