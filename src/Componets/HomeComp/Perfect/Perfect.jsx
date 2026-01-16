import BaseLine from "../../Layout/BaseLine";
import PerImg1 from "../../../assets/HomeCompImg/PerfectImg/PerImg1.png";
import PerImg2 from "../../../assets/HomeCompImg/PerfectImg/PerImg2.png";
import PerImg3 from "../../../assets/HomeCompImg/PerfectImg/PerImg3.png";
import PrimaryButton from "../../Layout/PrimaryButton";

const PerfectCupList = [
  {
    id: 1,
    img: PerImg1,
    name: "Espresso Coffee",
    description:
      "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been",
    aosDelay: "100",
  },
  {
    id: 2,
    img: PerImg2,
    name: "Americano Coffee",
    description:
      "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been",
    aosDelay: "300",
  },
  {
    id: 3,
    img: PerImg3,
    name: "Latte Coffee",
    description:
      "Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has been",
    aosDelay: "500",
  },
];

const Perfect = () => {
  return (
    <section className="py-32 bg-primary/15">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <h1
            data-aos="fade-up"
            className="text-center font-bold sm:text-5xl text-3xl tracking-wider"
          >
            Unlock Your Perfect Cup of Coffee
          </h1>
          <BaseLine />
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center sm:w-10/12 md:w-9/12 sm:text-lg text-black/60 tracking-wider"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.
          </p>

          {/* Coffee Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-6 container">
            {PerfectCupList.map((data) => (
              <div
                data-aos="zoom-in"
                data-aos-delay="600"
                key={data.id}
                className="relative group hover:bg-primary  bg-white group  text-white duration-500 transition  "
              >
                {/* <span className="absolute left-0 bottom-0 w-full h-0.5 transition-all bg-primary z-0 group-hover:h-96 duration-700"></span> */}
                <div className=" relative mx-auto  overflow-hidden z-10 pb-5">
                <img
                  src={data.img}
                  alt={data.name}
                  className="w-full transition relative z-10 duration-500 group-hover:scale-110  "
                />
                </div>
                <div className="p-8 md:p-6 xl:p-8 space-y-4 relative">
                  <p className=" font-bold text-xl text-black group-hover:text-white duration-500 transition">
                    {data.name}
                  </p>
                  <p className="text-black/45 group-hover:text-gray-50 duration-500 pb-5 leading-7 tracking-wide transition">
                    {data.description}
                  </p>

                  <PrimaryButton>Read More</PrimaryButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfect;
