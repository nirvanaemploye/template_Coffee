import { MdKeyboardArrowRight } from "react-icons/md";
import MapImg from "../../../assets/AboutCompImg/map.png";

const City = [
  {
    id: 1,
    CityName: "Canada",
  },
  {
    id: 2,
    CityName: "Canada",
  },
  {
    id: 3,
    CityName: "Canada",
  },
  {
    id: 4,
    CityName: "Canada",
  },
  {
    id: 5,
    CityName: "Canada",
  },
  {
    id: 6,
    CityName: "Canada",
  },
  {
    id: 7,
    CityName: "Canada",
  },
  {
    id: 8,
    CityName: "Canada",
  },
  {
    id: 9,
    CityName: "Canada",
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
          <div data-aos="zoom-out" className="flex justify-center items-center  ">
            <img src={MapImg} alt="" className="w-11/12"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesPoints;
